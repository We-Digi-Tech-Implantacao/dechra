import defaults from "../defaults";

export default function getSession(shopperId) {
    const url = "/api/dataentities/LD/search?_fields=_all&id=" + shopperId;
    const settings = {
        method: "GET",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json",
            "x-vtex-api-appKey": defaults.appKey,
            "x-vtex-api-appToken": defaults.appToken
        }
    }
    return fetch(url, settings);
}