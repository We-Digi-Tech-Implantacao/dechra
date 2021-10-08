import React, { useState } from "react"
import { FormattedPrice } from "vtex.formatted-price";
import useProduct from "vtex.product-context/useProduct";

function ProductInstallments() {
    const [Installments, setInstallments] = useState()

    const productData = async () => {
        const productContext = await useProduct();
        const selectedItem = productContext.selectedItem
        if (selectedItem !== undefined) {
            const Installments = selectedItem.sellers[0].commertialOffer.Installments
            setInstallments(Installments)
        }
    }
    productData()

    if (!Installments || Installments.length === 0 || Installments === undefined) {
        return null
    } else {
        const largest = Installments.sort((a, b) => a.NumberOfInstallments - b.NumberOfInstallments);
        const installment = largest.reverse()[0];
        return (
            installment.NumberOfInstallments > 1 ?
                <div style={{ display: "flex", color: "#1675bf", fontSize: "13px", alignItems: "center", justifyContent: "center", margin: "5px 0 0" }}>em até {installment.NumberOfInstallments}x de <span style={{ margin: "0 5px" }}><FormattedPrice value={installment.Value} /></span> sem juros</div>
                : null
        )
    }
}

export default ProductInstallments;