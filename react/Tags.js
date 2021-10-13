import useProduct from "vtex.product-context/useProduct";
import React, { useState, useLayoutEffect, Fragment, useEffect } from "react";
import style from "./tags.css";

const tags = {
    "Sem Glúten": {
        "src": "sem-gluten",
        "fileType": "png"
    },
    "Vegano": {
        "src": "veganos",
        "fileType": "png"
    }
}

function Tags() {
    const [categoryId, setCategoryId] = useState()
    const productDetails = useProduct();

    if (!productDetails) return null
    if (!productDetails.product) return null

    
    const {
        product: {
            properties
        }
    } = productDetails;

    useEffect(() => {
        setCategoryId(productDetails.product.categoryId)
    }, [productDetails])
    console.log("🚀 ~ file: Tags.js ~ line 33 ~ Tags ~ productDetails", productDetails)

    if (!properties || !categoryId) return null
    return (
        <div className={style.tagsWrapper}>
            {categoryId && categoryId === "14" ? null :
                <img src={`https://goldko.vtexassets.com/arquivos/TAG---ZERO-ADICAO-DE-ACUCARES.png?v=3`} />}
            {properties.map(prop => {
                if (prop.name != "Características") return
                return (
                    <>
                        {prop.values.map(value => {
                            return (
                                <>
                                    {Object.keys(tags).map(key => {
                                        if (key == value) {
                                            return (
                                                <img src={`https://goldko.vtexassets.com/arquivos/${tags[key].src}.${tags[key].fileType}`} alt={key} />
                                            )
                                        } else {
                                            return null
                                        }
                                    })}
                                </>
                            )
                        })}
                    </>
                )
            })}
        </div>
    )
}

export default Tags;