import React from 'react'
import styles from './styles.css'

export default function Order(){
    return(
        <div className={styles.containerSignNow}>
            <div className={styles.plans}>
                <select name="select">
                    <option disabled selected className={styles.optionTitle}>Ordernar</option>
                    <option value="valu1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                    <option value="value4">value4</option>
                </select>
            </div>
        </div>
    )
}