import styled from "styled-components"

const SliderContainer = styled.div`
    .slick-slider {
        position: relative;
        max-width: 80%;
        margin: 0 auto;
        .slick-list {
            overflow: hidden;
            .slick-track {
                display: flex;
                .slick-slide {
                    position: relative;
                    .container-image {
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
        .slick-dots {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex !important;
            align-items: center;
            @media (max-width: 767px) {
                bottom: 15px;
            }
            li {
                &:not(:last-child) {
                    padding-right: 15px;
                }
                button {
                    font-size: 0;
                    border: 0;
                    padding: 0;
                    background-color: unset;
                    background-image: unset;
                    cursor: pointer;
                    &::before {
                        content: "";
                        display: block;
                        width: 70px;
                        height: 13px;
                        cursor: pointer;
                        font-size: 0;
                        line-height: 0;
                        padding: 0;
                        border: 0;
                        background: #dedede;
                        @media (max-width: 767px) {
                            width: 25px;
                            height: 7px;
                        }
                    }
                }
                &.slick-active {
                    button {
                        &:before {
                            background: #ED4D33;
                        }
                    }
                }
            }
        }
        .slick-arrow {
            position: absolute;
            top: 50%;
            z-index: 1;
            font-size: 0;
            padding: 0;
            margin: 0;
            border: 0;
            background-color: transparent;
            cursor: pointer;
            &.slick-next {
                right: 0px;
                &::before {
                    content: "\f131";
                    font-family: "feather-icons";
                    font-size: 2rem;
                    color: #1675bf;
                }
            }
            &.slick-prev {
                left: 0px;
                &::before {
                    content: "\f130";
                    font-family: "feather-icons";
                    font-size: 2rem;
                    color: #1675bf;
                }
            }
            &.slick-disabled {
                opacity: .5;
            }
        }
    }
`
const Container = styled.div`
    .button {
        padding: 18px 25px;
        border-radius: 30px;
        color: #f46110;
        border: 1px solid #f46110;
        cursor: pointer;
        width: max-content;
        transition: all .3 ease;
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        background-color: #fff;
        @media(max-width: 1024px) {
            padding: 12px 18px;
            font-size: 12px;
        }
        &:hover {
            color: #fff;
            background-color: #f46110;
        }
    }
    .content {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 9999999;
        background-color: rgba(0, 0, 0, 0.3);
        .overlay {
            position: absolute;
            z-index: 999;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
    }

`;

export { Container, SliderContainer }