const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`

export async function askGemini(prompt) {
  const res = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  })

  if (!res.ok) {
    const err = await res.json()
    console.error('Gemini error:', err)
    throw new Error(`Gemini API error: ${res.status}`)
  }

  const data = await res.json()
  return data.candidates[0].content.parts[0].text
}

export async function parseInsurance(rawText) {
  return askGemini(`
    You are a medical insurance expert. Parse this insurance information and return ONLY valid JSON with no markdown, no backticks, no explanation:
    ${rawText}
    
    Return this exact structure:
    {
      "planName": "",
      "provider": "",
      "deductible": "",
      "outOfPocketMax": "",
      "covered": ["list of what is covered"],
      "notCovered": ["list of exclusions"],
      "copay": "",
      "summary": "2 sentence plain english summary"
    }
  `)
}

export async function searchTreatment(symptom, insuranceData) {
  return askGemini(`
    You are a medical insurance cost assistant.
    Patient symptom: "${symptom}"
    Insurance plan: ${JSON.stringify(insuranceData)}
    
    Return ONLY valid JSON with no markdown, no backticks, no explanation:
    {
      "condition": "likely condition name",
      "urgency": "low/medium/high",
      "treatments": ["list of recommended treatments"],
      "tests": [
        {
          "name": "test name",
          "estimatedCost": 200,
          "insuranceCovers": 160,
          "patientPays": 40,
          "coveragePercent": 80
        }
      ],
      "hospitals": [
        {
          "name": "Hospital Name",
          "distance": "2.3 miles",
          "specialty": "relevant specialty",
          "estimatedVisitCost": 300,
          "insuranceCovers": 240,
          "patientPays": 60,
          "rating": 4.2,
          "inNetwork": true
        }
      ],
      "totalEstimatedCost": 500,
      "totalInsuranceCovers": 400,
      "totalPatientOwes": 100,
      "disclaimer": "short disclaimer"
    }
  `)
}