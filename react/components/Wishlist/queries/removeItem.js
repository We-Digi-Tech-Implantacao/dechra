import defaults from "../defaults";

export default function removeItem(shopperId, name, itemsList) {
    const url = "/api/dataentities/LD/documents";
    const settings = {
        method: "PATCH",
        headers: {
            Accept: 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
            "x-vtex-api-appKey": defaults.appKey,
            "x-vtex-api-appToken": defaults.appToken
        },
        body: JSON.stringify({
            "id": shopperId,
            "name": name,
            "itemsList": JSON.stringify({
                "items": itemsList
            })
        })
    }
    return fetch(url, settings);
}