export async function speak(text) {
    const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID
    const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY

    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
        method: 'POST',
        headers: {
            'xi-api-key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text,
            model_id: 'eleven_multilingual_v2',
            voice_settings: { stability: 0.5, similarity_boost: 0.75 }
        })
    })

    if (!res.ok) {
        const err = await res.json().catch(() => ({ message: 'Unknown error' }));
        console.error('ElevenLabs error:', res.status, err);
        throw new Error(`ElevenLabs API error: ${res.status}`);
    }


    const blob = await res.blob()
    const audio = new Audio(URL.createObjectURL(blob))
    audio.play()
}
