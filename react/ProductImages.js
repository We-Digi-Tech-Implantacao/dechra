import useProduct from "vtex.product-context/useProduct";
import React, { useState, useLayoutEffect } from "react";
import styles from "./productImages.css";

export default function ProductImages() {
    const productDetails = useProduct();
    const [images, useImages] = useState([]);
    
    useLayoutEffect(() => {
        if (!productDetails) return
        const {
            selectedItem
        } = productDetails;
        if (!selectedItem) return
        useImages(selectedItem.images);
    }, [productDetails]);

    return (
        <>
            {
                images.length > 0 ?
                    <div className={styles.productImages}>
                        {
                            images.map((img, i) => {
                                if(img.imageLabel === 'tabela' || img.imageLabel === 'tabela-2') return 

                                return (
                                    <div>
                                        <img src={img.imageUrl} alt={img.imageText}/>
                                        {
                                            img.imageLabel != null && img.imageLabel.indexOf("cor") != -1 ? <div style={{
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                                zIndex: "1",
                                                opacity: ".1",
                                                position: "absolute",
                                                backgroundColor: `#${img.imageLabel.replace("cor", "")}`
                                            }}></div> : null
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                : null
            }
        </>
    );
}