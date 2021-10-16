import addItems from "./queries/addItems";
import {
    Spinner,
    Alert,
    ModalDialog
} from 'vtex.styleguide';
import removeItem from "./queries/removeItem";
import getSession from './queries/getSession.gql';
import useProduct from "vtex.product-context/useProduct";
import { useLazyQuery } from "react-apollo";
import React, {
    useLayoutEffect,
    useEffect,
    useState
} from "react";
import style from "./styles.css";

function Wishlist() {
    const productContext = useProduct();
    const [toast, setToast] = useState({
        message: "",
        type: "",
        open: false,
    });
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState("");
    const [userLogged, setUserLogged] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productMatches, setProductMatches] = useState(false);
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
            setUserLogged(false);
            setUserData(null);
        }
    }, [sessionLoading, session]);

    useEffect(() => {
        if (userLogged) {
            const lsItemsList = localStorage.getItem("itemsList");
            const itemsList = JSON.parse(lsItemsList);
            if (itemsList && itemsList.length > 0) {
                itemsList.forEach(item => {
                    if (item == null) return;
                    if (item.toString() == productContext.product.productId) {
                        setProductMatches(true);
                    }
                });
            }
        }
        setLoading(false);
    }, [userData, userLogged]);

    const removeItemHandle = () => {
        setLoading(true);
        let itemsList = JSON.parse(localStorage.getItem("itemsList"));
        let oldItem = parseInt(productContext.product.productId);
        const newItemsList = itemsList.filter(item => {
            if (item != oldItem) return item;
        });
        localStorage.setItem("itemsList", JSON.stringify(newItemsList));
        const promise = removeItem(userData.shopperId, userData.name, newItemsList);
        promise.then(response => {
            response.text().then(response => {
                setProductMatches(false);

                setToast({
                    message: "Produto removido da Lista de Favoritos com sucesso",
                    type: "success",
                    open: true,
                });
                setLoading(false);
            });
        }).catch(err => console.log("ERROR: ", err));
    }

    const addItemHandle = () => {
        setLoading(true);
        let itemsList = JSON.parse(localStorage.getItem("itemsList"));
        let newItem = parseInt(productContext.product.productId);
        if (itemsList.indexOf(newItem) == -1) {
            itemsList.push(newItem);
        }
        localStorage.setItem("itemsList", JSON.stringify(itemsList));
        itemsList = JSON.parse(localStorage.getItem("itemsList"));
        const promise = addItems(userData.shopperId, userData.name, itemsList);
        promise.then(response => {
            response.text().then(response => {
                console.log(response);
                setProductMatches(true);

                setToast({
                    message: "Produto inserido na Lista de Favoritos com sucesso",
                    type: "success",
                    open: true,
                });
                setLoading(false);
            });
        }).catch(err => console.log("ERROR: ", err));
    }

    const alertCloseHandle = (event) => {
        setToast({
            message: "",
            type: "",
            open: false,
        });
    }

    useEffect(() => { }, [toast]);
    useEffect(() => { }, [loading]);
    useEffect(() => { }, [productMatches]);

    const handleModalToggle = () => setIsModalOpen(!isModalOpen);

    if (loading) {
        return (
            <div style={{
                width: "100%",
                display: "flex",
                padding: "15px 0",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Spinner size="15" color="#fff" />
            </div>
        )
    } else {
        return (
            <>
                {userLogged ?
                    <>
                        {
                            productMatches ?
                                <button className={style.buttonWishlist} onClick={removeItemHandle}>
                                    <img src="https://denon.vtexassets.com/arquivos/heart-filled.svg" width="20" height="20" alt="Produto Adicionado" />
                                    <span>Remover</span>
                                </button>
                                :
                                <button className={style.buttonWishlist} onClick={addItemHandle}>
                                    <img src="https://denon.vtexassets.com/arquivos/heart.svg?v=12" width="20" height="20" alt="Adicionar Produto" />
                                    <span>Favorito</span>
                                </button>
                        }
                    </>
                    :
                    <>
                        <button className={style.buttonWishlist} onClick={handleModalToggle}>
                            <img src="https://denon.vtexassets.com/arquivos/heart.svg?v=12" width="20" height="20" alt="Adicionar Produto" />
                            <span>Favorito</span>
                        </button>
                        <ModalDialog
                            centered
                            confirmation={{
                                onClick: () => {
                                    location.href = location.origin + "/login"
                                },
                                label: 'Sim',
                            }}
                            cancelation={{
                                onClick: () => {
                                    handleModalToggle();
                                },
                                label: 'Não',
                            }}
                            isOpen={isModalOpen}
                            onClose={handleModalToggle}>
                            <div className="flex flex-column flex-row-ns">
                                <div className="w-100">
                                    <p>Para adicionar itens a sua Lista de desejos, primeiro você precisa estar autenticado. Quer se autenticar agora?</p>
                                </div>
                            </div>
                        </ModalDialog>
                    </>
                }

                {
                    toast.open ?
                        <Alert type={toast.type} autoClose={5000} onClose={alertCloseHandle}>{toast.message}</Alert>
                        : null
                }
            </>
        );
    }
}

export default Wishlist;