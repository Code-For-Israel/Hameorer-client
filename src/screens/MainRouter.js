import React, {useEffect} from 'react';
import MainNav from './MainNav';
import AuthRouter from './LoginStack/AuthRouter';
import {loginThunk, refreshAccess, selectAccess, selectIsGuide, selectLoading, setLoading,} from '../redux/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from './LoginStack/Loading';
import GuideNav from './GuideNav';

const MainRouter = () => {
    const loading = useSelector(selectLoading);
    const access = useSelector(selectAccess);
    const isGuide = useSelector(selectIsGuide);

    const dispatch = useDispatch();

    useEffect(() => {
        const getLocal = async () => {
            try {
                const value = await AsyncStorage.getItem('refreshToken');
                if (value !== null) {
                    dispatch(refreshAccess(value));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                    throw 'Local Storage is without a refresh token';
                }
            } catch (e) {
                console.log(e);
            }
        };
        const getEmailPassword = async () => {
            try {
                const email = await AsyncStorage.getItem('email');
                const password = await AsyncStorage.getItem('password');
                if (email !== null && password !== null) {
                    dispatch(loginThunk({email, password}));
                    dispatch(setLoading(false));
                } else {
                    dispatch(setLoading(false));
                    throw 'failed to log in';
                }
            } catch (e) {
                console.log(e);
            }
        };
        // getLocal();
        getEmailPassword();
    }, []);

    if (loading) {
        return <Loading/>;
    }
    if (access) {
        return isGuide ? <GuideNav/> : <MainNav/>;
    } else if (!access) {
        return <AuthRouter/>;
    }
};

export default MainRouter;
