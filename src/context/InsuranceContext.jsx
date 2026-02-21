import { createContext, useContext, useState } from 'react'

const InsuranceContext = createContext()

export function InsuranceProvider({ children }) {
    const [insuranceData, setInsuranceData] = useState(null)
    return (
        <InsuranceContext.Provider value={{ insuranceData, setInsuranceData }}>
            {children}
        </InsuranceContext.Provider>
    )
}

export const useInsurance = () => useContext(InsuranceContext)