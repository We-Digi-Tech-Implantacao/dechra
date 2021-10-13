import styles from "./styles.css";
import React, { useEffect } from "react";
import useProduct from "vtex.product-context/useProduct";

function AvailableQuantity() {
    const ProductContext = useProduct();

    const {
        selectedQuantity,
        selectedItem: {
            sellers: [
                {
                    commertialOffer: {
                        AvailableQuantity
                    }
                }
            ]
        }
    } = ProductContext;

    useEffect(() => {}, [selectedQuantity]);

    const subtraction = AvailableQuantity - selectedQuantity;
    if (subtraction > 0 && subtraction <= 5) {
        return <p className={styles.availableQuantityNormal}>{`Restam apenas ${subtraction} ${subtraction == 1 ? "produto" : "produtos"} em estoque`}</p>;
    } else if (subtraction <= 0) {
        return <p className={styles.availableQuantityDanger}>{`Não há mais produtos em estoque`}</p>;
    } else {
        return null;
    }
}

export default AvailableQuantity;