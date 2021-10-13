import React, { useState, createContext, useContext } from "react"

export const FilterContext = createContext()

export default function FilterProvider({ children }) {
    const [open, setOpen] = useState(false)

    const defineOpen = value => {
        setOpen(value)
    }

    return <FilterContext.Provider value={{open, setOpen}}>{ children }</FilterContext.Provider>
}

export function useFilter() {
    const context = useContext(FilterContext)
    if (!context) throw new Error("useFilter tem que ser usado juntament com FilterProvider")
    const { open, setOpen } = context
    return { open, setOpen } 
}