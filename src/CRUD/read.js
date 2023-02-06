import {AsyncStorage} from "@react-native-async-storage/async-storage";
const [storedData, setStoredData] = useState(null); 
export const getData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('data');
      setStoredData(JSON.parse(storedData));
      console.log('Data retrieved successfully:', storedData);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };