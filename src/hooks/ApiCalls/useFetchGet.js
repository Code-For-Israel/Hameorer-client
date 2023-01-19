import axios from "axios";
import {useEffect, useState} from "react";
import {getToken} from "../LocalStorage/GetToken";

export default function UseFetchGet(url) {
    let accessToken
    const refreshToken = (getToken())
    if (refreshToken.data)
        accessToken = refreshToken.data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (accessToken) {
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                }
            };
            setLoading(true);
            axios
                .get(url, headers)
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
    }, [accessToken]);

    return {data, loading, error};
}


