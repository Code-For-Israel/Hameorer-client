import axios from "axios";
import {useEffect, useState} from "react";

export function getTokenAccess() {
    // todo find a way to fix this so i can use it in get/post/put/delete --> probably use async somehow
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
                setData(response.data.access);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwODc3NjY1LCJpYXQiOjE2NzA4NzQwNjUsImp0aSI6IjQ2ODQ5ZmExM2YwNzRhODk5YjdiZGE1Nzc0NTkzZjEzIiwidXNlcl9pZCI6IjFmMDBjMjdkLTM3YWUtNGYzMC1iZmMxLWY2Nzk4MTYyN2Y3OSJ9.-VpemU2WQziG_Fz6QVFivr3nhgLvfxMsOGoR9rXhbT4'
    return token
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