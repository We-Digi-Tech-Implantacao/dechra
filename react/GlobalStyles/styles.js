import styled from "styled-components"

export const SearchBarContainer = styled.div`
    display: flex;
    position: static;
    align-items: center;
    line-height: 0;
    @media (max-width: 1024px) {
        top: 0;
        left: -15px;
        width: calc(100% + 30px);
        z-index: 2;
        max-width: ${props => {
            if (props.open) return "absolute"
            else return "static"
        }};
    }
    .vtex-search-1-x-tileList > ul {
        flex-direction: column !important;
    }
    .vtex-product-summary-2-x-price_className--horizontal {
        flex-direction: row;
        line-height: 1;
        justify-content: flex-start;
        margin-left: 23px;
    }
    .vtex-product-summary-2-x-productBrand {
        height: auto;
        background: transparent;
        line-height: 1;
        margin-bottom: 15px;
        margin-left: 15px;
        text-align: left;
    }

    .vtex-product-summary-2-x-sellingPriceContainer--horizontal {
        margin: -7px 5px 0 0;
    }
    .vtex-product-summary-2-x-currencyCode, .vtex-product-summary-2-x-currencyLiteral, .vtex-product-summary-2-x-currencyInteger, .vtex-product-summary-2-x-currencyGroup, .vtex-product-summary-2-x-currencyDecimal, .vtex-product-summary-2-x-currencyFraction {
        font-size: .925rem
    }
    .vtex-flex-layout-0-x-flexRowContent--horizontal-shelf .vtex-flex-layout-0-x-stretchChildrenWidth:first-child {
        min-width: 70px
    }
    .vtex-flex-layout-0-x-flexRowContent--horizontal-shelf .vtex-flex-layout-0-x-stretchChildrenWidth:first-child .vtex-product-summary-2-x-imageNormal {
        min-width: 70px   
    }
    .vtex-search-1-x-tileListSeeMore {
        background: #1C355E;
        width: calc(100% - 40px);
        margin: 0 auto 20px;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 15px;
        line-height: 1;
        height: auto;
        padding: 17px 0;
    }
`

export const SearchBarButton = styled.div`
    color: #999;
    border: 1px solid #e9e9e9;
    cursor: pointer;
    display: flex;
    padding: 8px 25px;
    align-items: center;
    margin-right: 15px;
    border-radius: 100px;
    i {
        color: #999;
        font-size: 26px;
        margin-right: 10px;
    }
    svg {
        width: 25px;
        height: 25px;
    }
    @media (max-width: 1024px) {
        border: 0;
        padding: 0;
        font-size: 0;
        border-radius: 0;
        i {
            color: #555;
            font-size: 22px;
        }
    }
`

export const SearchBarInner = styled.div`
    top: 122px;
    left: 0;
    width: 100%;
    display: block;
    padding: 0;
    z-index: 2;
    position: absolute;
    @media (max-width: 1024px) {
        top: -14px;
        left: 0;
        width: 100%;
        height: 108px;
        display: flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        background-color: #fff;
    }
    .vtex-store-components-3-x-portalWrapper {
        > div {
            /* width: 100%;
            display: block; */
            /* @media (min-width: 1024px) {
                position: static !important;
            } */
            /* > div {
                position: static !important;
            } */
        }
    }
`

export const SearchBarOverlay = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    position: fixed;
    display: ${props => {
        if (props.open) return "block"
        else return "none"
    }};
    background-color: rgba(0,0,0,0);
`