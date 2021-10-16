export default function getSession() {
    const url = "/api/vtexid/pub/authenticated/user";
    const settings = {
        method: "GET"
    }
    return fetch(url, settings);
}