import axios from "axios";
import {getTokenAccess} from "./authentication_provider";
import {useEffect, useState} from "react";

export default function useFetchPut(url, body) {
    const token = getTokenAccess()

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};

    useEffect(() => {
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
    }, []);

    return {data, loading, error};
}