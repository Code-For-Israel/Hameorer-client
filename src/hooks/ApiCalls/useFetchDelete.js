import axios from "axios";
import {getTokenAccess} from "./authentication_provider";

export default function UseFetchDelete(url) {
    const token = getTokenAccess()
    const headers = {headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}};
    return axios.delete(url, headers)
        .then(
            data => console.log(data))
        .catch(
            err => console.log(err.request))
}