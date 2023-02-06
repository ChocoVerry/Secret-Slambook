import AsyncStorage from "@react-native-async-storage/async-storage";
export const updateData = async (updatedData) => {
  try {
    await AsyncStorage.mergeItem('data', JSON.stringify(updatedData));
    console.log('Data updated successfully');
  } catch (error) {
    console.error('Error updating data:', error);
  }
};