import AsyncStorage from "@react-native-async-storage/async-storage";
export const saveData = async () => {
  try {
    await AsyncStorage.setItem('data', JSON.stringify(data));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};