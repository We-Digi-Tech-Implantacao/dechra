import { useState } from "react"
import styled from "styled-components"
import { index as RichText } from "vtex.rich-text"
import { Button, Input, Textarea } from "vtex.styleguide"

const account = "lojadechra-dechra-store-0-x"
const Form = styled.form`
    margin: 0 auto;
    display: flex;
    padding: 40px 30px 50px;
    max-width: 1000px;
    flex-direction: column;
    .${account}-container {
        margin: 0 0 30px;
        .${account}-wrapper {
            .${account}-heading {
                margin: 0 0 15px;
            }
            .${account}-paragraph {
                margin: 0 0 10px;
                &:last-child {
                    margin: 0;
                }
            }
        }
    }
    input, textarea {
        padding: 0 10px;
    }
    textarea {
        padding: 10px;
    }
`
export const FormSuccess = styled.div`
    padding: 30px;
    max-width: 600px;
    border-radius: 5px;
    margin: 18px auto 0;
    display: block;
    h3 {
        margin-bottom: 0;
        text-align: center;
        margin-top: 0;
    }
    h4 {
        margin-bottom: 0;
        text-align: center;
        margin-top: 12px;
    }
`

const subhead = "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec rutrum congue leo eget malesuada."

function Contact() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [submited, setSubmited] = useState(false)

    const submitHandler = ev => {
        ev.preventDefault()
        setLoading(true)

        console.log(data)

        const url = "/api/dataentities/FC/documents"
        const settings = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/vnd.vtex.ds.v10+json"
            },
            body: JSON.stringify(data)
        }
        fetch(url, settings).then((res) => {
            res.json().then((res) => {
                setTimeout(() => {
                    setLoading(false)
                    setSubmited(true)
                }, 1000)
            })
        }).catch((err) => console.error(err))
    }

    const changeHandler = ev => {
        let name = ev.currentTarget.name
        let value = ev.currentTarget.value

        setData({ ...data, [name]: value })
    }

    console.log("Data", data)

    return (
        <>
            {
                !submited ?
                    <Form onSubmit={submitHandler}>
                        <RichText text={"# Contato\n\n" + subhead} />
                        <div className="mb6">
                            <Input name="name" id="name" size="regular" label="Seu nome:" onChange={changeHandler} required />
                        </div>
                        <div className="mb6">
                            <Input name="email" id="email" type="email" size="regular" label="Seu e-mail:" onChange={changeHandler} required />
                        </div>
                        <div className="mb6">
                            <Input name="tel" id="tel" type="tel" size="regular" label="Seu telefone:" onChange={changeHandler} pattern="[0-9]*" required />
                        </div>
                        <div className="mb6">
                            <Textarea name="message" id="message" size="regular" label="Escreva sua mensagem" onChange={changeHandler} />
                        </div>
                        <Button type="submit" variation="primary" block isLoading={loading}>Enviar</Button>
                    </Form>
                    :
                    <FormSuccess>
                        <h3>Muito obrigado!</h3>
                        <h4>Seu formulário foi encaminhado com sucesso.</h4>
                        <div className="mt7">
                            <Button variation="secondary" href="/" block>Voltar para a Home</Button>
                        </div>
                    </FormSuccess>
            }
        </>
    )
}

export default Contact