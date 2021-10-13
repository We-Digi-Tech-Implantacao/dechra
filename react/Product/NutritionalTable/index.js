import React, { useEffect, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import * as S from "./styles"
import { Modal } from 'vtex.styleguide'
import Slider from "react-slick";

const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

function NutritionalTable() {
    const product = useProduct()
    const [imageData, setImageData] = useState([])
    const [isOpen, setIsOpen] = useState({ isModalOpen: false })
    const [categoryId, setCategoryId] = useState()

    useEffect(() => {
        if (product.selectedItem && product.selectedItem.images && product.selectedItem.images.length > 0) {
            let imagesFiltered = product.product.items.map(item => item.images.filter(image => image.imageLabel === 'tabela'))
            if (imagesFiltered && imagesFiltered.length > 0) {
                setImageData(...imagesFiltered)
            }
        }
        setCategoryId(product.product.categoryId)
    }, [product])

    const handleModalToggle = () => {
        setIsOpen({ isModalOpen: !isOpen.isModalOpen })
    }

    if (!imageData) return null
    return (
        <>
            {imageData.length !== 0 && (
                <S.Container>
                    <div className="button" onClick={handleModalToggle}>{categoryId === "14" ? 'Tabela de Medidas' : 'Informação Nutricional'} </div>
                    <Modal
                        centered
                        isOpen={isOpen.isModalOpen}
                        onClose={handleModalToggle}
                    >
                        <S.SliderContainer>
                            <Slider {...settings}>
                                {imageData.map(item =>
                                    <img src={item.imageUrl} alt={item.imageLabel} width="100%" />
                                )}
                            </Slider>
                        </S.SliderContainer>
                    </Modal>
                </S.Container>
            )}
        </>
    )
}

export default NutritionalTable
