import axios from "axios";
import {useEffect, useState} from "react";
import {setDataLocal} from "../LocalStorage/AsyncStorage";

export function getTokenUsingRefreshToken(refreshToken) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json'}};

    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/refresh/'

    useEffect(() => {
        if (refreshToken)
        axios
            .post(url, refreshToken, headers)
            .then((response) => {
                setData(response.data.access);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [refreshToken]);

    return {data, loading, error}
}


export function getTokenAccess() {
    // todo in the future move this to cookies
    // todo in the future change the body so i get it as input from the user
    // todo use the refresh token in the future for re login
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json'}};

    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/'
    const userLoginBody = {email: 'hameorer1@com.com', password: 'itizk12345'}

    useEffect(() => {
        axios
            .post(url, userLoginBody, headers)
            .then((response) => {
                setData(response.data.access);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect((data) => {
        if (data && data.refresh)
        {
            console.log("set data refresh token as: ",data.refresh)
        }
    }, []);


    return {data, loading, error}
}


export function getTokenRefresh() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const headers = {headers: {'Content-Type': 'application/json'}};

    //todo in the future change this so we get url and username from function getTokenAccess(url,body)
    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/'
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