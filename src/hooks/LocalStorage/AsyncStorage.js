import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataLocal = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const removeDataLocal = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const getDataLocal = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        } else throw ('no key exists: ', key);
    } catch (e) {
        console.log(e);
        return null;
    }
};
