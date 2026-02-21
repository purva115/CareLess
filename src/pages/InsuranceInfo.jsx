import { useState } from 'react'
import { parseInsurance } from '../api/gemini'
import { speak } from '../api/elevenlabs'
import { useInsurance } from '../context/InsuranceContext'

export default function InsuranceInfo() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const { setInsuranceData } = useInsurance()

    const handleAnalyze = async () => {
        setLoading(true)
        try {
            const raw = await parseInsurance(input)
            const cleaned = raw.replace(/```json|```/g, '').trim()
            const parsed = JSON.parse(cleaned)
            setResult(parsed)
            setInsuranceData(parsed)
        } catch (e) {
            alert('Error parsing insurance. Try again.')
        }
        setLoading(false)
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-1">Insurance Breakdown</h1>
            <p className="text-slate-400 mb-6">Paste your insurance card details, plan name, deductible, copay — anything you have.</p>

            <textarea
                className="w-full h-40 bg-slate-800 border border-slate-700 rounded-xl p-4 text-sm resize-none focus:outline-none focus:border-blue-500"
                placeholder="e.g. Blue Shield PPO, Deductible $1500, Copay $30 primary / $50 specialist, covers hospitalization, mental health, preventive care, excludes cosmetic surgery..."
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button
                onClick={handleAnalyze}
                disabled={loading || !input}
                className="mt-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2 rounded-lg font-medium transition-colors"
            >
                {loading ? 'Analyzing...' : 'Analyze Plan'}
            </button>

            {result && (
                <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h2 className="text-xl font-bold text-blue-400">{result.planName}</h2>
                            <p className="text-sm text-slate-400">{result.provider}</p>
                        </div>
                        <button
                            onClick={() => speak(result.summary)}
                            className="p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
                            title="Listen to summary"
                        >
                            🔊
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-800/50 p-4 rounded-xl">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Deductible</p>
                            <p className="text-lg font-medium">{result.deductible}</p>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl">
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Out of Pocket Max</p>
                            <p className="text-lg font-medium">{result.outOfPocketMax}</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-bold text-slate-300 mb-2">📋 Summary</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{result.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-bold text-green-400 mb-2">✓ Covered</h3>
                            <ul className="space-y-1">
                                {result.covered?.map((item, i) => (
                                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                        <span className="text-green-500">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-red-400 mb-2">✗ Not Covered</h3>
                            <ul className="space-y-1">
                                {result.notCovered?.map((item, i) => (
                                    <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                                        <span className="text-red-500">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
