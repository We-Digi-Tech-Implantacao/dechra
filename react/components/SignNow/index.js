import React from 'react'
import styles from './styles.css'

export default function SignNow(){
    return(
        <div className={styles.containerSignNow}>
            <div className={styles.plans}>
                <select name="select">
                    <option disabled selected className={styles.optionTitle}>plano mensal</option>
                    <option value="valor1">Valor 1</option>
                    <option value="valor2">Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
                <div className={styles.containerPrice}>
                    <strong>por apenar</strong>
                    <h2>R$ 299,90</h2>
                </div>
            </div>
            <div className={styles.button}>
                <a href="">Assine agora</a>
            </div>
        </div>
    )
}