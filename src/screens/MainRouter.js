import React, { useEffect } from "react";
import MainNav from "./MainNav";
import AuthRouter from "./LoginStack/AuthRouter";
import {
  refreshAccess,
  selectAccess,
  selectIsGuide,
  selectLoading,
  setLoading,
} from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "./LoginStack/Loading";
import GuideNav from "./GuideNav";

const MainRouter = () => {
  const loading = useSelector(selectLoading);
  const access = useSelector(selectAccess);
  const isGuide = useSelector(selectIsGuide);

  const dispatch = useDispatch();

  useEffect(() => {
    const getLocal = async () => {
      try {
        const value = await AsyncStorage.getItem("refreshToken");
        if (value !== null) {
          dispatch(refreshAccess(value));
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
          throw "Local Storage is without a refresh token";
        }
      } catch (e) {
        console.log(e);
      }
    };
    getLocal();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (access) {
    return isGuide ? <GuideNav /> : <MainNav />;
  } else if (!access) {
    return <AuthRouter />;
  }
};

export default MainRouter;
