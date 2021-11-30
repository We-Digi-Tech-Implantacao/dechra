import React, {useState ,useEffect} from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'

export default function ButtonDownload(){
    const [download, setDownload] = useState(null)
    const productContext = useProduct()

    useEffect(()=>{
        productContext?.product?.properties.map(item => {
           if(item.name == "Material-Complemento") {
                setDownload(item.values[0].split(","))
           }
        })
    }, [productContext])

    if(download == null) return null

    return (
        download.length && download.map(item => {
            return (
                <div className={styles.containerDownload}>
                    <a href={item} target="_blank">Download</a>
                </div>
            )
        })
    )
}