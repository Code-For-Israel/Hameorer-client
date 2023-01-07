import axios from "axios";
import {useEffect, useState} from "react";
import {setDataLocal} from "../LocalStorage/AsyncStorage";
import getSiteUrl from "../../utils/getSiteUrl";

export function getTokenAccess() {
    // todo in the future change the body so i get it as input from the user
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json'}};

    const url = getSiteUrl() + 'token/'
    const userLoginBody = {email: 'hameorer1@com.com', password: 'itizk12345'}

    useEffect(() => {
        axios
            .post(url, userLoginBody, headers)
            .then((response) => {
                setData(response.data.access);
                setDataLocal(response.data.refresh).then(() =>
                    console.log("saved refresh token ", response.data.refresh))
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return {data, loading, error}
}


export function getTokenRefresh() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json'}};

    //todo in the future change this so we get url and username from function getTokenAccess(url,body)
    const url = getSiteUrl() + 'token/'
    const userLoginBody = {email: 'hameorer1@com.com', password: 'itizk12345'}

    useEffect(() => {
        setLoading(true);
        axios
            .post(url, userLoginBody, headers)
            .then((response) => {
                setData(response.data.refresh);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return {data, loading, error};
}