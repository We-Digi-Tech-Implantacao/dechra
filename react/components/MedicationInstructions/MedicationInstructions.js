import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function MedicationInstructions(){
    const [bula, setBula] = useState(null)
    const productContext = useProduct()

    useEffect(()=>{
        productContext?.product?.properties.map(item => {
           if(item.name == "Bula") {
                setBula(item.values[0])
           }
        })
    }, [productContext])

    if(bula == null) return null

    return (
        <div className={styles.containerBula}>
            <a href={bula} target="_blank">Bula</a>
        </div>
    )
}