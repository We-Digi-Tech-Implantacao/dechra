export const getUser = async (email) => {
    let response = null
    const settings = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/vnd.vtex.ds.v10+json"
        }
    }
    const url = `api/dataentities/LG/search?email=${email}&_fields=email,type`
    try {
        response = await (
            await fetch(url, settings)
        ).json()
    } catch(err) {
        throw new Error("Error: ", err)
    }
    return response
}