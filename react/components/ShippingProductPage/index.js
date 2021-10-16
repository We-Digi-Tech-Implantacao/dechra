import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as S from './styles';
import { useOrderForm } from "vtex.order-manager/OrderForm";
import { FormattedPrice } from "vtex.formatted-price";

function ShippingProductPage({ value }) {
    const [requiredPrice, setRequiredPrice] = useState(200);
    const [missingPrice, setMissingPrice] = useState(Number);
    const [calculatedValue, setCalculatedValue] = useState(0);

    const minicart = useOrderForm();
    const applyCalculations = () => {
        if (value) {
            setRequiredPrice(value)
        }
        let minicartValue = (minicart.orderForm.value / 100).toFixed(2);
        setMissingPrice(requiredPrice - minicartValue)
        setCalculatedValue((minicartValue / requiredPrice) * 100)
    }

    useEffect(() => applyCalculations(), [minicart]);


    return (
        <S.Container calculatedValue={calculatedValue}>
            <p>
                <div>
                    {missingPrice > 0 ? (
                        <>
                            <span>
                                FRETE GRÁTIS ACIMA DE  <FormattedPrice value={requiredPrice} />
                            </span>
                            <span>
                                Faltam <FormattedPrice value={ missingPrice } /> para ganhar frete grátis
                            </span>
                        </>
                    ) : (
                        <span>
                            Seu frete é grátis!
                        </span>
                    )}
                </div>
                <div className="background-progress">
                    <div className="percentage-bar"></div>
                </div>
            </p>
        </S.Container>
    )
}

ShippingProductPage.schema = {
    type: 'object',
    title: 'Pagina de Produto - Valor mínimo para frete grátis',
    properties: {
        value: {
            type: 'number',
            title: "Valor",
            default: 200
        }
    }
};

export default ShippingProductPage
