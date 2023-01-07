import {getDataLocal} from "./AsyncStorage";
import axios from "axios";
import {useEffect, useState} from "react";

export const getToken = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/refresh/'

    useEffect(() => {
        getDataLocal().then((refreshToken) => {
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
        });
    }, []);


    return {data, loading, error};
}