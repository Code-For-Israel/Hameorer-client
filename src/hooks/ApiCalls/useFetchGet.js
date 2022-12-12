import axios from "axios";
import {useEffect, useState} from "react";
import {getTokenAccess} from "./authentication_provider";

export default function UseFetchGet(url) {
    const token = getTokenAccess()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

    useEffect(() => {
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

    }, []);

    return {data, loading, error};
}


