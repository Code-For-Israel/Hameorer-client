import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataLocal = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
        console.log("save worked")
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getDataLocal = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            return value
        } else
            throw ("no token exists")
    } catch (e) {
        console.log(e)
        console.log("first time user logs in, send him to login page")
        return null
    }
}
