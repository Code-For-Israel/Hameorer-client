import axios from "axios";
import {useEffect, useState} from "react";
import {getTokenAccess} from "./authentication_provider";

export default function UseFetchGet(url) {
    const token = getTokenAccess().data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(token) {
            const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
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
    }, [token]);

    return {data, loading, error};
}


