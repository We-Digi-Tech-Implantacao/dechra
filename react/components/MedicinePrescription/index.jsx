import {
    useState
} from "react"
import { Button, Dropzone, Alert } from 'vtex.styleguide'
import { MedicinePrescriptionContainer, FormSuccess } from "./styles"
import { SaveForm, FileAttachment } from "./methods"

export default function MedicinePrescription() {
    const [alert, setAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [submited, setSubmited] = useState(false)
    const [attachment, setAttachment] = useState(null)

    const handleFile = (files) => {
        console.log("FILES", files)
        setAttachment(files)
    }

    const handleReset = () => {
        setAttachment(null)
    }

    const submitHandler = async (ev) => {
        ev.preventDefault()
        ev.stopPropagation()

        const orderId = window.location.search.split("=")[1]

        if (attachment === null) {
            setAlert(true)
        } else {
            setAlert(false)
            setLoading(true)
            const save_form_response = await SaveForm({ id: orderId })
            console.log("save_form_response", save_form_response)
            const file_attachment_response = await FileAttachment(orderId, attachment)
            console.log("file_attachment_response", file_attachment_response)
            setLoading(false)
            setSubmited(true)
        }
    }

    console.log("attachment", attachment)

    return (
        <MedicinePrescriptionContainer onSubmit={submitHandler}>
            <div>
                <h2>Faça upload da sua receita médica</h2>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec rutrum congue leo eget malesuada.</p>
            </div>
            {
                submited ?
                    <FormSuccess>
                        <h3>Muito obrigado!</h3>
                        <h4>Seu formulário foi encaminhado com sucesso.</h4>
                    </FormSuccess>
                :
                    <>
                        <div style={{ maxWidth: "600px", cursor: "pointer", margin: "11px auto 29px" }}>
                            <Dropzone
                                onDropAccepted={handleFile}
                                onFileReset={handleReset}
                            >
                                <div className="pt7">
                                    <div className="flex flex-column items-center">
                                        <span className="f5">Solte aqui seu arquivo ou imagem</span>
                                        <span className="f5 mt3" style={{ cursor: "pointer", color: "#053471", fontWeight: "500", textTransform: "lowercase", textDecoration: "underline" }}>
                                            Escolha seu arquivo
                                        </span>
                                    </div>
                                </div>
                            </Dropzone>
                        </div>
                        {
                            alert ? 
                                <div style={{ maxWidth: "600px", margin: "0 auto 28px" }}>
                                    <Alert type="error" onClose={() => setAlert(null)} autoClose={3000}>
                                        Você precisa anexar sua receita.
                                    </Alert>
                                </div>
                            : null
                        }
                        <div style={{ maxWidth: "300px", cursor: "pointer", margin: "0 auto" }}>
                            <Button variation="primary" size="regular" type="submit" isLoading={loading}>Enviar</Button>
                        </div>
                    </>
            }
        </MedicinePrescriptionContainer>
    )
}