import {getDataLocal} from "./AsyncStorage";
import axios from "axios";
import {useEffect, useState} from "react";
import getSiteUrl from "../../utils/getSiteUrl";

export const getToken = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = getSiteUrl() + 'token/refresh/'

    useEffect(() => {
        getDataLocal('refreshToken').then((refreshToken) => {
                if (refreshToken != null) {
                    const body = {refresh: refreshToken}
                    const headers = {headers: {'Content-Type': 'application/json'}};
                    setLoading(true);
                    axios
                        .post(url, body, headers)
                        .then((response) => {
                            console.log("got access token ", response.data.access)
                            setData(response.data.access);
                        })
                        .catch((err) => {
                            setError(err);
                            if (err.response.statusText === "Unauthorized")
                                console.log("send user to login page")
                        })
                        .finally(() => {
                            setLoading(false);
                        });
                } else {
                    return null
                }
            }
        ).catch(error => {
            console.log("failed to get the token :( ")
            console.log("navigate to login page.")
            console.log(error)
        });
    }, []);


    return {data, loading, error};
}