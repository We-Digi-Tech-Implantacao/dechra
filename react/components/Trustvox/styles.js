import styled from "styled-components"

export const Container = styled.div`
  padding: 30px;
  @media (max-width: 767px) {
    padding: 15px;
  }
  .ts-title {
    margin: 0;
    padding-bottom: 15px;
    color: #1675bf;
    font-size: 2.25rem;
  }
  .trustvox-widget,
  .trustvox-widget div,
  .trustvox-widget span {
    font-family: Charlevoix Pro;
  }
  .ts-v-rating-note_value,
  .ts-product-reviews-list-item .ts-rating .ts-rating-number span {
    font-family: 'Lato' !important;
  }
  .ts-product-reviews-list-item-voting .ts-thumb-down[data-v-0be44b53] {
    background-color: #1675bfa3;
  }
  .trustvox-widget .ts-v-stars .ts-v-stars-foreground svg path {
    fill: #00a6dd;
  }
  .ts-v-recommendations .ts-v-percentage-circle .ts-v-circle-mainline[data-v-3bf25936] {
    stroke: #00a6dd;
  }
  .ts-v-percentage-label,
  .ts-v-recommendations_text {
    font-size: 11px;
    color: #00a6dd;
  }
  .ts-recomendation-value {
    color: #00a6dd;
  }
  .trustvox-widget .ts-dropdown,
  .trustvox-widget .ts-dropdown .ts-dropdown-content {
    border-radius: 5px;
    border-color: #1675bf;
  }
  .ts-product-reviews-list-item-voting .ts-vote-question {
    color: #1675bf !important;
    font-weight: bold;
  }
  .trustvox-widget {
    .ts-product-reviews-list-item .ts-block-two .ts-reply, 
    .ts-product-reviews-list-item .ts-block-two .ts-review,
    .ts-product-reviews-list .ts-header_title,
    .ts-v-rating-based-on,
    .ts-v-rating_label,
    .ts-v-rating-note,
    .ts-v-recommendations,
    .ts-product-reviews-list-filter,
    .ts-v-footer .ts-v-footer-container,
    .ts-product-reviews-list-item .ts-block-one .ts-text,
    .ts-product-reviews-list-item .ts-block-one .ts-value,
    .ts-dropdown .ts-dropdown-content .ts-item button,
    .ts-product-reviews-list-item .ts-block-one .ts-rating-number,
    .ts-no-reviews_subtitle,
    .ts-no-reviews_message {
      color: #1675bf;
    }
    .ts-product-reviews-list-item-voting .ts-thumb-up {
      color: #fff;
      background-color: #1675bf;
    }
  }
  .trustvox-widget .ts-button--more span {
    padding: 18px 25px;
    border-radius: 30px;
    color: #f46110;
    border: 1px solid #f46110;
    cursor: pointer;
    transition: all .3 ease;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    background-color: #fff;
    font-family: Charlevoix Pro, sans-serif;
    &:hover {
        color: #fff;
        background-color: #f46110;
        border-color: #f46110;
    }
  }
`

export const Stars = styled.div`
  * {
    color: #1675bf !important;
    .ts-shelf-container .ts-sprite {
      background-image: url('https://goldko.vtexassets.com/arquivos/sprite.png');
    }
    .ts-shelf-container .ts-sprite {
      
    }
  }
`