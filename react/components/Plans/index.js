import React from 'react'
import styles from './styles.css'

export default function Plans(){
    return(
        <div className={styles.container}>
            <div className={styles.containerPlans}>
                <div className={styles.title}>
                    <strong>MENSAL</strong>
                </div>
                <div className={styles.price}>
                    <strong className={styles.text}>por apenas</strong>
                    <h2>R$ 299,90</h2>
                    <strong className={styles.access}>ACESSO ILIMITADO</strong>
                </div>
                <div className={styles.button}>
                    <a href="">Assine agora</a>
                </div>
            </div>

            <div className={styles.containerPlans}>
                <div className={styles.title}>
                    <strong>ANUAL</strong>
                </div>
                <div className={styles.price}>
                    <strong className={styles.textSave}>ECONOMIZE R$ 608,80</strong>
                    <strong className={styles.text}>por apenas</strong>
                    <h2>R$ 2.990,90</h2>
                    <strong className={styles.access}>ACESSO ILIMITADO</strong>
                </div>
                <div className={styles.buttonSave}>
                    <a href="">Assine agora</a>
                </div>
            </div>

            <div className={styles.containerPlans}>
                <div className={styles.title}>
                    <strong>EQUIPE</strong>
                </div>
                <div className={styles.price}>
                    <strong className={styles.text}>por apenas</strong>
                    <h2>R$ 270,90</h2>
                    <strong className={styles.access}>ACESSO ILIMITADO</strong>
                </div>
                <div className={styles.button}>
                    <a href="">Assine agora</a>
                </div>
            </div>
        </div>
    )
}