import styled from "styled-components"

export const UploadContainer = styled.div`
    width: 100%;
    margin: 0 auto 30px;
    display: flex;
    padding: 20px;
    max-width: 500px;
    background: #f2f4f5;
    box-shadow: 2px 2px 5px rgb(0 0 0 / 5%);
    border-radius: 15px;
    flex-direction: column;
    .image-especification-title {
        font-size: .985rem;
        text-align: left;
        font-weight: bold;
        padding-top: 5px;
        border-bottom: 2px solid rgb(0 0 0 /10%);
        padding-bottom: 15px;
    }
    ul {
        margin: 0;
        display: flex;
        padding: 25px 0 0;
        flex-flow: row wrap;
        list-style: none;
        li {
            width: 50%;
            font-size: .8rem;
            font-weight: bold;
            margin-bottom: 25px;
            .value {
                font-weight: normal;
            }
        }
    }
    .image-preview {
        margin: 45px 0 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        div::before {
            width: 30px;
            height: 30px;
            background-size: 20px
        }
        span {
            margin: 0 0 10px;
            display: block;
            font-size: 14px;
            font-weight: bold;
            text-transform: uppercase;
        }
        .image-preview-wrap {
            display: flex;
            padding: 15px;
            position: relative;
            background: rgb(255 255 255 / 75%);
            align-items: center;
            border-radius: 10px;
            flex-direction: column;
            justify-content: center;
            backdrop-filter: blur(5px);
            button {
                top: 15px;
                right: 15px;
                border: 0;
                cursor: pointer;
                margin: 0;
                padding: 0;
                position: absolute;
                font-size: 0;
                background: transparent;
                font-family: Flaticon1;
                &::before {
                    color: #888;
                    content: "\f184";
                    font-size: 15px;
                }
                &:hover {
                    &::before {
                        content: "\f183";
                    }
                }
            }
            img {
                max-width: 100px;
                margin-bottom: 10px;
            }
            span {
                margin: 0;
                display: block;
                font-weight: normal;
                text-transform: initial;
            }
        }
    }
    .input-form {
        border: 2px dashed;
        margin: 0;
        padding: 0 !important;
        display: flex;
        position: relative;
        border-color: ${props => {
            if (props.valid === null) {
                return "#000"
            } else {
                return props.valid ? "#27ae607a" : "#e74c3c7a"}
            }
        };
        border-radius: 5px;
        justify-content: center;
        background-color: #fff;
        label {
            width: auto;
            margin: 0;
            padding: 20px 10px !important;
            z-index: 1;
            letter-spacing: .5px !important;
            text-align: center;
            color: "#000000";
            /* ${props => {
                if (props.valid === null) {
                    return "#000000"
                } else {
                    return props.valid ? "#27ae60" : "#e74c3c"}
                }
            }; */
        }
        input {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
            opacity: 0;
            padding: 0 !important;
            z-index: 2;
            position: absolute;
        }
    }
    img {
        max-width: 300px;
    }
`