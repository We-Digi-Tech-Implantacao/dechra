import useProduct from "vtex.product-context/useProduct";
import React, { useEffect, useLayoutEffect } from "react";
import defaults from "./defaults";
import * as S from './styles'

function StarsDetail() {
    const ProductContext = useProduct();

    function setTrustvoxAttrs() {
        window['_trustvox_shelf_rate'] = [];
        window['_trustvox_shelf_rate'].push(
            ['_watchSubtree', true],
            ['_productContainer', 'body'],
            ['_storeId', defaults.ID],
            ['_productId', ProductContext?.product?.productId],
        );
    }

    function addTrustvoxScript() {
        const script = window.document.createElement('script');
        script.src = '//rate.trustvox.com.br/widget.js';
        script.async = true;
        script.defer = true;
        setTimeout(() => document.head.appendChild(script), 500);
    }

    function cleanupTrustvox() {
        if (window['_trustvox_initializer']) setTimeout(() => window['_trustvox_initializer'].cleanup(), 1000);
    }

    function autoloadTrustvox() {
        if (window['_trustvox_initializer']) setTimeout(() => window['_trustvox_initializer'].autoInitialize(), 1500);
    }

    useEffect(() => {
        setTrustvoxAttrs();
        addTrustvoxScript();
    }, []);

    useLayoutEffect(() => {
        setTrustvoxAttrs();
        addTrustvoxScript();
    }, []);
    if(!ProductContext?.product) return null

    return (
        <S.Stars>
            <a class="trustvox-fluid-jump trustvox-widget-rating" href="#trustvox-reviews" title="Pergunte e veja opiniões de quem já comprou">
                <div class="trustvox-shelf-container" data-trustvox-product-code-js={ProductContext?.product?.productId} data-trustvox-should-skip-filter="true" data-trustvox-display-rate-schema="true"></div>
            </a>
        </S.Stars>
    );
}

export default StarsDetail;