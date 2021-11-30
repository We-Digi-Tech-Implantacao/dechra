import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function Description(){
    const [description, setDescription] = useState(null)
    const productContext = useProduct()

    useEffect(()=>{
        productContext?.product?.properties.map(item => {
           if(item.name == "Informações Técnicas") {
                setDescription(item.values[0])
           }
        })
    }, [productContext])

    if(description == null) return null

    return (
       <div className={styles.containerDescription}>
           <p>{description}</p>
       </div>
    )
}