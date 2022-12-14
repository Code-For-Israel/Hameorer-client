import axios from "axios";
import {useEffect, useState} from "react";
import {getToken} from "../LocalStorage/GetToken";

export default function UseFetchPost(url, body) {
    let accessToken
    const refreshToken = (getToken())
    if (refreshToken.data)
        accessToken = refreshToken.data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (accessToken && body) {
            const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${accessToken}`}};
            setLoading(true);
            axios
                .post(url, body, headers)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [accessToken, body]);

    return {data, loading, error};
}