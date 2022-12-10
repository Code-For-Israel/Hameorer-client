import axios from "axios";
import {getTokenAccess} from "./authentication_provider";

export default function UseFetchGet(url) {
    const token = getTokenAccess()
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
    return axios.get(url, headers)
        .then(
            data => console.log(data))
        .catch(
            err => console.log(err.request))
}