import axios from "axios";

export function getTokenAccess() {
    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/'
    const headers = {headers: {'Content-Type': 'application/json'}};
    const userLoginBody = {email: 'hameorer1@com.com', password: 'itizk12345'}
    console.log("logging in..")
    return axios.post(url, userLoginBody, headers).then(answer => {
        console.log(answer.data.access);
        return answer.data.access;
    }).catch(
        err => console.log(err.request))
}

export function getTokenRefresh() {
    const url = 'http://ec2-3-15-215-70.us-east-2.compute.amazonaws.com:8000/api/token/'
    const headers = {headers: {'Content-Type': 'application/json'}};
    const userLoginBody = {email: 'hameorer1@com.com', password: 'itizk12345'}
    console.log("logging in..")
    return axios.post(url, userLoginBody, headers).then(answer => {
        console.log(answer.data.refresh);
        return answer.data.refresh
    }).catch(
        err => console.log(err.request))
}