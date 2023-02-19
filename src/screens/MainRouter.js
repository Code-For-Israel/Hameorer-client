import React, {useEffect} from "react";
import MainNav from "./MainNav";
import AuthRouter from "./LoginStack/AuthRouter";
import {refreshAccess, selectAccess, selectLoading, setLoading} from "../redux/userSlice";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./LoginStack/Loading"

const MainRouter = () => {
    const access = useSelector(selectAccess);
    const loading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        const getLocal = async () => {
            try {
                const value = await AsyncStorage.getItem("refreshToken");
                if (value !== null) {
                    console.log("dispactching");
                    dispatch(refreshAccess(value));
                    // dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                    throw "Local Storage is without a refresh token"
                }
            } catch (e) {
                console.log(e);
            }
        };
        getLocal();
    }, []);

    if (loading) {
        return <Loading/>
    }

    return access ? <MainNav/> : <AuthRouter/>;
};

export default MainRouter;
