import { Wrapper } from "vtex.add-to-cart-button"
import React, { useEffect } from "react"
import * as S from "./styles"
import MinicartIcon from './minicart.svg'
import styles from './styles.css'

export default function AddToMinicartButton(props) {
    useEffect(() => {
        const button = document.querySelectorAll('.goldko-goldko-theme-1-x-buttonQuickviewWrapper button')

        if (button.length) {
            button.forEach((item) => {
                item.addEventListener('click', function (event) {
                    document.querySelector('.vtex-minicart-2-x-openIconContainer').click()
                })
            })
        }
    }, []);

    return (
        <div className={`${styles.buttonQuickviewWrapper} ${props.blockClass}`}>
            <Wrapper text="Adicionar ao carrinho" sholdOpenMinicart={true} />
        </div>
    )
}
