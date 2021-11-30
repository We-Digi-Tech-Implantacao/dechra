import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function Indicated(){
    const [indicacao, setIndicacao] = useState(null)
    const productContext = useProduct()
    
    useEffect(()=>{
        productContext?.product?.properties.map(item => {
           if(item.name == "Indicação") {
                setIndicacao(item.values[0])
           }
        })
    }, [productContext])

    if(indicacao == null) return null

    return (
        <div className={styles.containerIndicated}>
            <p>{indicacao}</p>
        </div>
    )
}