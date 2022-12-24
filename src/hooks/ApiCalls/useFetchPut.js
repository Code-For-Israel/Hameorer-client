import axios from "axios";
import {getTokenAccess} from "./authentication_provider";
import {useEffect, useState} from "react";

export default function UseFetchPut(url, body) {
    const token = getTokenAccess().data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (token && body) {
            const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
            setLoading(true);
            axios
                .put(url, body, headers)
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
    }, [token,body]);

    return {data, loading, error};
}