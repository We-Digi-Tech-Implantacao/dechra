import {
    useRef,
    useState,
    useEffect,
    useLayoutEffect
} from "react"
import { UploadContainer } from "./styles"

export default function Upload() {
    const [name, setName] = useState(null)
    const [alert, setAlert] = useState({
        message: null,
        severity: null
    })
    const [data, setData] = useState()
    const [preview, setPreview] = useState(null)
    const [validImage, setValidImage] = useState(null)
    const [previewLoading, setPreviewLoading] = useState(false)

    const inputFile = useRef()

    const fileLoaded = (ev) => {
        setPreviewLoading(true)
        if (ev.currentTarget.files.length > 0) {
            if (ev.currentTarget.files[0].type === "image/jpeg") {
                setAlert({
                    severity: "success",
                    message: "Formato correto"
                })
                setValidImage(true)

                const objectURL = URL.createObjectURL(file.files[0])
                setName(file.files[0].name)
                setPreview(objectURL)
                setData({ ...data, image: objectURL })
                setTimeout(() => {
                    setPreviewLoading(false)
                }, 5000)
            } else {
                setAlert({
                    severity: "error",
                    message: "Somente imagem JPG"
                })
                setValidImage(false)
                setTimeout(() => {
                    setAlert({
                        severity: null,
                        message: null
                    })
                    inputFile.current.value = ""
                }, 5000)
            }
        }
    }

    const deleteFile = () => {
        setPreviewLoading(true)

        inputFile.current.value = ""

        setTimeout(() => {
            setName(null)
            setPreview(null)
            setValidImage(null)
            setPreviewLoading(false)
        }, 5000)
    }

    let message = null
    // if (art !== undefined) {
    //     if (art !== null) {
    //         if (art.validImage) {
    //             message = "Faça upload de uma imagem correta"
    //         }
    //     }
    //     if (validImage !== null) {
    //         if (validImage) {
    //             message = "Imagem carregada com sucesso, clique aqui para fazer um novo upload"
    //         } else {
    //             message = "Arquivo incorreto, este arquivo não é uma imagem no formato JPG ou não corresponde aos nossos pré-requisitos de imagem para impressão"
    //         }
    //     }
    // }

    return (
        <UploadContainer valid={validImage}>
            {
                <>
                    <div className="input-form">
                        <label>{"Clique aqui para fazer upload da sua arte"}</label>
                        <input id="file" type="file" onChange={fileLoaded} accept=".jpg" required={true} ref={inputFile} />
                    </div>
                    {
                        preview !== null && validImage ?
                            <div className="image-preview">
                                <span>Preview:</span>
                                {
                                    previewLoading ?
                                        <img src={"https://lojadechra.vtexassets.com/arquivos/loading.svg"} width={"25"} height={"25"} />
                                        :
                                        <>
                                            <div className="image-preview-wrap">
                                                <button onClick={deleteFile}>Excluir</button>
                                                <img src={preview} />
                                                <span>{name}</span>
                                            </div>
                                        </>
                                }
                            </div>
                            : null
                    }
                </>
            }
        </UploadContainer>
    )
}