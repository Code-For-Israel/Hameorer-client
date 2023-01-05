import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

export const getData = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e)
        return null
    }
}
