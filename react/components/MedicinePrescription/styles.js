import styled from "styled-components"

export const MedicinePrescriptionContainer = styled.form`
    width: 80%;
    display: flex;
    margin: 0 auto 3rem;
    flex-direction: column;
    @media (max-width: 767px) {
        width: calc(100% - 30px);
    }
    h2, p {
        text-align: center;
    }
    .vtex-button {
        &.bg-disabled {
            background-color: #000 !important;
            .vtex__icon-spinner {
                color: #fff;
            }
        }
    }
`

export const FormSuccess = styled.div`
    padding: 30px;
    max-width: 600px;
    border-radius: 5px;
    border: 2px solid #eeeeee;
    margin: 18px auto 0;
    display: block;
    background-color: #f2f4f5;
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