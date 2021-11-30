import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function ButtonDownload(){
    const [download, setDownload] = useState(null)
    const productContext = useProduct()

    useEffect(()=>{
        productContext?.product?.properties.map(item => {
           if(item.name == "Material-Complemento") {
                setDownload(item.values[0])
           }
        })
    }, [productContext])

    if(download == null) return null

    return (
        <div className={styles.containerDownload}>
            <a href={download} target="_blank">Download</a>
        </div>
    )
}