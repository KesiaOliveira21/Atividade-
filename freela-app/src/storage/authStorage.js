import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = '@freela_app_user';

export async function saveUserToStorage(user) {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

export async function getUserFromStorage() {
  try {
    const userData = await AsyncStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    console.error('Error getting user:', error);
    return null;
  }
}

export async function removeUserFromStorage() {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error removing user:', error);
  }
}
