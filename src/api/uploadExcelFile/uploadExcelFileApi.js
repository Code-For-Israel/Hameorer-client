async function uploadToServer() {
    await Axios.post("https://upload-service-url", data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
}