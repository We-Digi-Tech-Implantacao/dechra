import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function Description(){
    const [description, setDescription] = useState(null)
    const productContext = useProduct()
    console.log("🚀 ~ file: Description.js ~ line 8 ~ Description ~ productContext", productContext)
    
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
            { description &&
                <div>               
                    <h2 className={styles.titleDescription}>Informações Técnicas</h2>
                    <p>{description}</p>                
                </div>
            }
       </div>
    )
}