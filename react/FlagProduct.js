import style from "./FlagProduct.css"
import React from "react"
import useProduct from "vtex.product-context/useProduct"

function FlagProduct() {
    const productDetail = useProduct()
    const product = productDetail
    return (
        product.clusterHighlights ?
            <span className={style.flagProduct}>{product.clusterHighlights[0].name}</span>
        : null
    )
}

export default FlagProduct;