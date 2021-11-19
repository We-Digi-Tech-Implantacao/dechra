export const FileAttachment = async (id, file) => {
    console.log("id", id)
    console.log("file", file)

    let response = null
    let data = new FormData()
        data.append("attachment", file[0], file[0].name.replace(/[`~!@#$%^&*()_|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '-'))

    const url = `/api/dataentities/RE/documents/${id}/attachment/attachments`
    const settings = {
        method: "POST",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json"
        },
        body: data
    }
    
    try {
        response = await (
            await fetch(url, settings)
        ).text()
    } catch(err) {
        throw new Error("Error: ", err)
    }
    return response
}

export const SaveForm = async (data) => {
    let response = null
    const url = "/api/dataentities/RE/documents"
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/vnd.vtex.ds.v10+json"
        },
        body: JSON.stringify(data)
    }

    try {
        response = await (
            await fetch(url, settings)
        ).json()
    } catch(err) {
        throw new Error("Error: ", err)
    }
    return response
}