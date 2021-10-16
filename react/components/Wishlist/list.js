import getList from "./queries/getList";
import React, {
    useLayoutEffect,
    useEffect,
    useState,
    useMemo
} from "react";
import { useLazyQuery } from "react-apollo";
import removeItem from "./queries/removeItem";
import getSession from './queries/getSession.gql';
import productsQuery from "./queries/productById.gql";
import ProductSummary from 'vtex.product-summary/ProductSummaryCustom';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { ExtensionPoint, useRuntime, useTreePath } from 'vtex.render-runtime';
import {
    Spinner
} from 'vtex.styleguide';

import style from "./list.css";

function List() {
    const { treePath } = useTreePath();
    const { list } = useListContext() || [];
    const [empty, setEmpty] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState("");
    const [userLogged, setUserLogged] = useState(false);
    const [loadProducts, { data, loading: productLoading }] = useLazyQuery(productsQuery);
    const [ fetchSession, { data: session, loading: sessionLoading } ] = useLazyQuery(getSession);

    useLayoutEffect(() => {
        fetchSession();
    }, []);
    
    useEffect(() => {
        if (session && session.profile != null) {
            setUserLogged(true);
            setUserData({
                shopperId: session.profile.userId,
                name: session.profile.firstName
            });
        } else if (session && session.profile == null) {
            window.location = window.location.origin + "/login?returnUrl=lista-de-desejos";
        }
    }, [sessionLoading, session]);

    const fetchList = () => {
        getList(userData.shopperId).then(response => {
            response.json().then(response => {
                if (response.length) {
                    console.log(response);
                    const itemsList = JSON.parse(response[0].itemsList);
                    console.log("ITEMSLIST: ", itemsList.items);
                    if (itemsList.items.length > 0) {
                        loadProducts({
                            variables: {
                                ids: itemsList.items
                            }
                        });
                    } else {
                        setEmpty(true);
                    }
                    setLoading(false);
                } else {
                    setEmpty(true);
                    setLoading(false);
                }
            });
        }).catch(err => console.log("ERROR: ", err));
    }

    useEffect(() => {
        if (userData) {
            fetchList();
        }
    }, [userData, userLogged]);

    const listContextValue = useMemo(() => {
        console.log("DATA: ", data);
        if (data) {
            const componentList = data.productsByIdentifier.map(product => {
                const normalizedProduct = ProductSummary.mapCatalogProductToProductSummary(
                    product
                );
                console.log("normalizedProduct: ", normalizedProduct);
                return {
                    id: "product-summary",
                    key: product.id,
                    product: normalizedProduct,
                    treePath: treePath
                }
            });
            return list.concat(componentList);
        }
    }, [productLoading, data]);

    const removeItemHandle = event => {
        setLoading(true);
        let itemsList = JSON.parse(localStorage.getItem("itemsList"));
        let oldItem = event.currentTarget.getAttribute("productId");
        console.log("oldItem: ", oldItem);
        const newItemsList = itemsList.filter(item => {
            if (item != oldItem) return item;
        });
        localStorage.setItem("itemsList", JSON.stringify(newItemsList));
        const promise = removeItem(userData.shopperId, userData.name, newItemsList);
        promise.then(response => {
            response.text().then(response => {
                fetchList();
            });
        }).catch(err => console.log("ERROR: ", err));
    }

    if (loading) {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                padding: "50px 0",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Spinner size="18" color="#000" />
            </div>
        )
    } else {
        return (
            <div className={style.containerListWishList}>
                <div class="vtex-rich-text-0-x-container vtex-rich-text-0-x-container--collection-title flex tl items-start justify-start t-body c-on-base">
                    <div class="vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--collection-title">
                        <h1 class="vtex-rich-text-0-x-heading vtex-rich-text-0-x-heading--collection-title t-heading-3 vtex-rich-text-0-x-headingLevel3 vtex-rich-text-0-x-headingLevel3--collection-title vtex-rich-text-0-x-heading-level-3">Lista de Desejos</h1>
                    </div>
                </div>

                {
                    userLogged ?
                        <div className={style.wishlistWrapper}>
                            {
                                empty ? 
                                    <p style={{
                                        padding: "30px"
                                    }}>Não há produtos adicionados na sua Lista de Favoritos</p>
                                : 
                                    <>
                                        {listContextValue ?
                                            listContextValue.map(item => {
                                                return (
                                                    <div className={style.customProductSummary}>
                                                        <a className={style.element} href={`/${item.product.linkText}/p`}>
                                                            <div className={style.col1}>
                                                                <img src={item.product.sku.image.imageUrl.replace("-350-auto", "-350-350")} alt={item.product.productName} />
                                                                <button productId={item.product.productId} className={style.removeButton} onClick={event => {
                                                                    event.stopPropagation();
                                                                    event.preventDefault();
                                                                    removeItemHandle(event);
                                                                }}>
                                                                    <img width="18" height="18" src={"https://dogopets.vtexassets.com/arquivos/trash.svg"} alt="Remover" />
                                                                </button>
                                                            </div>
                                                            <div className={style.col2}>
                                                                {/* <a className={style.productBrand} href={`/${item.product.brand}`} onClick={event => event.stopPropagation()}>{item.product.brand}</a> */}
                                                                <p className={style.productName}>{item.product.productName}</p>
                                                            </div>
                                                        </a>
                                                    </div>
                                                );
                                            })
                                            : null}
                                    </>
                            }
                        </div>
                    : null
                }
            </div>
        );
    }
}

export default List;