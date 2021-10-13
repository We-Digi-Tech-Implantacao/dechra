import React, { useContext, useCallback, useState, useEffect } from "react"
import style from "./filter.css"

import { FilterContext } from "./context/FilterContext"

export default function FilterTrigger() {
    const { defineOpen } = useContext(FilterContext)
    const [open, setOpen] = useState(false)

    const handleClick = useCallback(() => {
        setOpen(!open)
    })

    useEffect(() => {
        //defineOpen(!open)
    }, [open])

    return (
        <span className={style.button} onClick={handleClick}>Filtrar por</span>
    )
}