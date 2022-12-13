import axios from "axios";
import {getTokenAccess} from "./authentication_provider";
import {useEffect, useState} from "react";

export default function UseFetchDelete(url) {
    const token = getTokenAccess().data

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
        setLoading(true);
        axios
            .delete(url, headers)
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


