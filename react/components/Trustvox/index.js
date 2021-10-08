import useProduct from "vtex.product-context/useProduct";
import React, { useEffect, useLayoutEffect } from "react";
import defaults from "./defaults";
import * as S from './styles'

function Trustvox() {

    const ProductContext = useProduct();
    console.log("🚀 ~ file: index.js ~ line 8 ~ Trustvox ~ ProductContext", ProductContext)

    function setTrustvoxAttrs() {
        window['_trustvox'] = [];
        window['_trustvox'].push(
            ['_storeId', defaults.ID],
            ['_productId', ProductContext?.product?.productId],
            ['_productName', ProductContext?.product?.productName],
            ['_productPhotos', [ProductContext?.selectedItem?.images[0].imageUrl]]
        );
    }

    function addTrustvoxScript() {
        const script = window.document.createElement('script');
        script.src = '//static.trustvox.com.br/sincero/sincero.js';
        script.async = false;
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
        cleanupTrustvox();
        autoloadTrustvox();
    }, [ProductContext]);

    useLayoutEffect(() => {
        setTrustvoxAttrs();
        addTrustvoxScript();
        cleanupTrustvox();
        autoloadTrustvox();
    }, [ProductContext]);

    return (
        <>
            <S.Container>
                <h2 className="ts-title">Avaliações</h2>
                <div id="_trustvox_widget"></div>
            </S.Container>
        </>
    );
}

export default Trustvox;