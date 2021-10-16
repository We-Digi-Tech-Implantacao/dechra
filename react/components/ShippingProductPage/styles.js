import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ calculatedValue }) => css`
        z-index: 1;
        //font-family: "Dosis",sans-serif;
        width: auto !important;
        @media(max-width: 1024px) {
            max-width: 80%;
            margin: 30px auto;
        }
        p {
            margin: 0;
            font-size: 14px;
            color: #000;
            font-weight: 100;
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            @media(max-width: 1024px) {
            }
            span {
                display: flex !important;
                //display: block;
                &:nth-child(1) {
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    color: #053471;
                    font-size: 14px;
                    font-weight: 400;
                    padding-bottom: 5px;
                }
                &:nth-child(2) {
                    font-weight: 400;
                    color: #808080
                }
            }
            &::before {
                content: "";
                display: block;
                width: 23px;
                height: 23px;
                background-image: url("https://lojadechra.vtexassets.com/arquivos/frete.png");
                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
                margin-right: 10px;
            }
            .casaamazing-casaamazing-theme-0-x-price {
                display: inline-block;
            }
            .background-progress {
                background: #F2F6F7;
                border-radius: 30px;
                overflow: hidden;
                width: 100%;
                margin-top: 10px;
                .percentage-bar {
                    width: ${`${calculatedValue}%`};
                    height: 10px;
                    background: #053471;
                    transition: all .5s ease;
                }
            }
        }
    `}
`;