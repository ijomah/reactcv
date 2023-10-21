export const formSubmitApi = (url, payload) => {
    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "enctype": "multipart/form-data",
            "accept-charset": "UTF-8",
        },
        body: JSON.stringify(payload)
    })
}