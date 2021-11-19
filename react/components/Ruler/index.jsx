import { useLayoutEffect } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import { useDevice } from "vtex.device-detector"
import { index as RichText } from "vtex.rich-text"

const account = "lojadechra-dechra-store-0-x"
const colorPrimary = "#053471"

const RulerContainer = styled.section`
    width: calc(100% - 6rem);
    margin: 0 3rem;
    display: flex;
    padding: 25px 0;
    align-items: center;
    border-bottom: 1px solid rgba(124,124,126,.075);
    justify-content: space-between;
    @media (max-width: 550px) {
        width: 100%;
        margin: 0;
        padding: 25px 0 0;
        border-bottom: 0;
    }
    .slick-slider {
        padding: 0;
        overflow: visible;
        .slick-list {
            .slick-track {
                display: flex;
                justify-content: space-between;
                &::before, &::after {
                    display: none;
                }
                @media (max-width: 550px) {
                    align-items: center;
                    justify-content: flex-start;
                }
                /* .slick-slide {
                    @media (max-width: 550px) {
                        width: 45vw;
                    }
                } */
            }
        }
        .slick-arrow {
            color: rgba(124, 124, 126);
            opacity: 0;
            z-index: 1;
            transition: opacity .2s linear;
            &:hover {
                opacity: .5;
            }
            &.slick-prev {
                left: -34px;
            }
            &.slick-next {
                right: -34px;
            }
            &::before {
                line-height: 1.5;
            }
        }
        &:hover {
            .slick-arrow {
                opacity: .25;
            }
        }
    }
`

const Item = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
        padding-left: 20px;
        padding-right: 35px;
        justify-content: flex-start;
    }
`

const Icon = styled.img`
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
    margin-right: 15px;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    -webkit-font-smoothing: antialiased;
`

const Head = styled.span`
    .${account}-container {
        .${account}-wrapper {
            .${account}-paragraph,
            .${account}-heading {
                color: ${colorPrimary};
                margin: 0;
                font-size: 18px;
                font-weight: 600;
                white-space: nowrap;
                text-transform: uppercase;
                @media (max-width: 550px) {
                    white-space: break-spaces;
                }
                .${account}-link {
                    color: ${colorPrimary};
                }
            }
        }
    }
`

const SubHead = styled.small`
    .${account}-container {
        .${account}-wrapper {
            .${account}-paragraph,
            .${account}-heading {
                color: ${colorPrimary};
                margin: 0;
                font-size: 15px;
                white-space: nowrap;
                text-transform: uppercase;
                @media (max-width: 550px) {
                    white-space: break-spaces;
                }
                .${account}-link {
                    color: ${colorPrimary};
                }
            }
        }
    }
`

function NextArrow(props) {
    const { className, style, onClick } = props
    return (
        <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--brands ${className}`} fill="none" width="20" height="20" viewBox="0 0 16 16" style={{ display: "block" }} onClick={onClick} xmlns="http://www.w3.org/2000/svg"><use href="#nav-thin-caret--right"></use></svg>
    )
}

function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <svg className={`vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--brands ${className}`} fill="none" width="20" height="20" viewBox="0 0 16 16" style={{ display: "block" }} onClick={onClick} xmlns="http://www.w3.org/2000/svg"><use href="#nav-thin-caret--left"></use></svg>
    )
}

export default function Ruler(props) {
    console.log("props", props)
    const { isMobile } = useDevice()

    let settings = {}
    if (isMobile) {
        settings = {
            dots: false,
            arrows: false,
            speed: 500,
            infinite: false,
            slidesToShow: isMobile ? 1 : props.carousel === undefined ? 4 : props.carousel.maxItems,
            slidesToScroll: 1,
            variableWidth: true
        }
    } else {
        settings = {
            dots: false,
            arrows: true,
            speed: 500,
            infinite: false,
            slidesToShow: isMobile ? 1 : props.carousel === undefined ? 4 : props.carousel.maxItems,
            slidesToScroll: 1,
            variableWidth: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }
    }

    useLayoutEffect(() => {
        if (!document.querySelector("head link#slick")) {
            document.querySelector("head").insertAdjacentHTML("beforeend", "<link id='slick' rel='stylesheet' type='text/css' charset='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />")
        }
        if (!document.querySelector("head link#slick-theme")) {
            document.querySelector("head").insertAdjacentHTML("beforeend", "<link id='slick-theme' rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />")
        }
        if (!document.querySelector("head style#slick")) {
            document.querySelector("head").insertAdjacentHTML("beforeend", "<style id='slick'>.slick-slider { width: 100%; overflow: hidden } .slick-slider .slick-list { width: 100% }</style>")
        }
    }, [])

    if (props.data === undefined) return null
    return (
        <RulerContainer>
            <Slider {...settings}>
                {
                    props.data.map((item) => {
                        return (
                            <div>
                                <Item>
                                    <Icon src={item.icon} />
                                    <div className="flex flex-column items-start">
                                        <Head>
                                            <RichText text={item.head} />
                                        </Head>
                                        <SubHead>
                                            <RichText text={item.subhead} />
                                        </SubHead>
                                    </div>
                                </Item>
                            </div>
                        )
                    })
                }
            </Slider>
        </RulerContainer>
    )
    // return null
}

Ruler.schema = {
    title: "Régua de informações",
    description: "É onde se encontra informações curtas e objetivas do site, como promoções, régras de frete e etc..",
    type: "object",
    properties: {
        carousel: {
            properties: {
                maxItems: {
                    title: "Quantidade máxima de itens por linha",
                    type: "string",
                    default: "4"
                }
            }
        },
        data: {
            type: "array",
            title: "Itens",
            items: {
                type: "object",
                title: "Item",
                properties: {
                    head: {
                        title: "Título",
                        type: "string"
                    },
                    subhead: {
                        title: "Subtítulo",
                        type: "string"
                    },
                    icon: {
                        title: "Ícone",
                        type: "string",
                        widget: {
                            'ui:widget': 'image-uploader',
                        }
                    },
                }
            }
        }
    }
}