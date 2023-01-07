import {getDataLocal} from "./AsyncStorage";
import {getTokenAccess, getTokenUsingRefreshToken} from "../ApiCalls/authentication_provider";

export const getToken = () => {
    let tokenRefresh = getDataLocal().then((data) => {
            console.log("got refresh token: ", data)
            if (tokenRefresh !== null) {
                console.log("if we are not null - return it ")
                return data
            } else {
                console.log("regular way")
            }
        }
    )

}