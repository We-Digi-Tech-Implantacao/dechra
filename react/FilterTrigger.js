import React, { useContext, useCallback, useState } from "react"
import style from "./components/Filter/filter.css"

import Button from "./components/Filter/FilterTrigger"
import FilterProvider from "./components/Filter/context/FilterContext"

function FilterTrigger() {
    return (
        <FilterProvider>
            <Button />
        </FilterProvider>
    )
}

export default FilterTrigger