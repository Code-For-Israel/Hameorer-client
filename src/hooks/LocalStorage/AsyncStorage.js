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
        console.log("got ", value)
        if (value !== null) {
            return value
        }
        else
            throw ("no token exists")
    } catch (e) {
        if (e === "no token")
            console.log("Error caught - no token")
        console.log(e)
        return null
    }
}
