import addItems from "./queries/addItems";
import { 
    Spinner,
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
import style from "./summary.css";

function WishlistSummary() {
    const productContext = useProduct();
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
                setProductMatches(true);
                setLoading(false);
            });
        }).catch(err => console.log("ERROR: ", err));
    }

    useEffect(() => {}, [loading]);
    useEffect(() => {}, [productMatches]);

    const handleModalToggle = () => setIsModalOpen(!isModalOpen);

    if (loading) {
        return (
            <div className={style.buttonWishlistSummary}>
                <Spinner size="18" color="#1A2D00" />
            </div>
        )
    } else {
        return (
            <>
                {
                    userLogged ? 
                        <>
                            {
                                productMatches ? 
                                    <button className={style.buttonWishlistSummary} onClick={event => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        removeItemHandle();
                                    }}>
                                        <img src="https://denon.vtexassets.com/arquivos/heart-filled.svg" width="18" height="18" alt="Produto Adicionado" />
                                    </button>
                                : 
                                    <button className={style.buttonWishlistSummary} onClick={event => {
                                        event.stopPropagation();
                                        event.preventDefault();
                                        addItemHandle();
                                    }}>
                                        <img src="https://denon.vtexassets.com/arquivos/heart.svg?v=12" width="18" height="18" alt="Adicionar Produto" />
                                    </button>
                            }
                        </>
                    :
                        <>
                            <button className={style.buttonWishlistSummary} onClick={event => {
                                event.stopPropagation();
                                event.preventDefault();
                                handleModalToggle();
                            }}>
                                <img src="https://denon.vtexassets.com/arquivos/heart.svg?v=12" width="18" height="18" alt="Adicionar Produto" />
                            </button>
                            <div className={style.stopPropagation} onClick={event => event.stopPropagation()}>
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
                            </div>
                        </>
                }
            </>
        );
    }
}

export default WishlistSummary;