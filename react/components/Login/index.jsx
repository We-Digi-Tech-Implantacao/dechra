import {
    useState,
    useEffect,
    useLayoutEffect
} from "react"
import {
    Query,
    useLazyQuery,
} from "react-apollo"
import getSession from "./getSession.gql"
import { 
    getUser
} from "./methods"

export default function LoginIdentifier() {
    const [fetchSession, { data: session, loading: sessionLoading }] = useLazyQuery(getSession)

    useLayoutEffect(() => {
        fetchSession()

        // vtex-search-1-x-searchBanner--top-banner
        if (!document.querySelector("head style#custom")) {
            document.querySelector("head").insertAdjacentHTML("beforeend", `
                <style id='custom'>
                    .vtex-search-1-x-searchBanner--top-banner a img {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 100%;
                        transform: translate(-50%, -50%);
                    }
                    .vtex-stack-layout-0-x-stackItem--prodsum--summary-buy-button
                    .lojadechra-dechra-store-0-x-buttonDataContainer {
                        margin-left: 90px;
                    }
                </style>
            `)
        }
    }, [])

    useEffect(() => {
        const fetchData = async (email) => {
            const res = await getUser(email)
            console.log("RES", res)
        }
        if (session && session.profile != null) fetchData(session.profile.email)
    }, [session, sessionLoading])

    return null
}