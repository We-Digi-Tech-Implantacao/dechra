import styled from "styled-components"

export const Container = styled.div`
  &.product-page {
    height: 100%;
    display: flex;
    align-items: center;
    .dechara-theme-1-x-buttonDataContainer {
      font-size: 1rem;
        &::after {
          width: 20px;
          height: 20px;
        }
    }
  }
  .dechara-theme-1-x-buttonDataContainer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 13px;
      font-weight: 600;
      color: #fff;
    }
`