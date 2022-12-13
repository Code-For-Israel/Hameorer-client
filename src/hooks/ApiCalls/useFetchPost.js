import axios from "axios";
import {useEffect, useState} from "react";
import {getTokenAccess} from "./authentication_provider";

export default function UseFetchPost(url, body) {
    const token = getTokenAccess().data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
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
    }, []);

    return {data, loading, error};
}