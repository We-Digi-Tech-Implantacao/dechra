import style from "./Flag.css"
import React from "react"
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'

function Flag() {
    const productSummary = useProductSummary()
    const product = productSummary

    return (
        product.clusterHighlights ?
            <span className={style.flag}>{product.clusterHighlights[0].name}</span>
        : null
    )
}

export default Flag