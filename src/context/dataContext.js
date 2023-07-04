import { createContext, useContext, useState } from "react"

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [state, setState] = useState({
        isNonMobile: true,
    });

    return (
        <DataContext.Provider
            value={{
                ...state,
                setIsNonMobile: (flag) => setState((prev) => ({ ...prev, isNonMobile: flag })),
            }}
        >
            {children}
        </DataContext.Provider >
    )
}

export const useDataContext = () => useContext(DataContext);