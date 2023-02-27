import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataLocal = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Successfully saved to local storage');
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
