import AsyncStorage from "@react-native-async-storage/async-storage";
export  const deleteData = async () => {
  try {
    await AsyncStorage.removeItem('data');
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};