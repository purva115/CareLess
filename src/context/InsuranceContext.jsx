import React, { createContext, useContext, useState } from 'react';

const InsuranceContext = createContext();

export const InsuranceProvider = ({ children }) => {
    const [insuranceData, setInsuranceData] = useState(null);

    return (
        <InsuranceContext.Provider value={{ insuranceData, setInsuranceData }}>
            {children}
        </InsuranceContext.Provider>
    );
};

export const useInsurance = () => useContext(InsuranceContext);
