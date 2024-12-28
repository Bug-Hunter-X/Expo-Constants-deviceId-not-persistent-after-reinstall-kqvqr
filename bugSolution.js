// bugSolution.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUniqueDeviceIdAsync = async () => {
  try {
    const deviceId = await AsyncStorage.getItem('uniqueDeviceId');
    if (deviceId) {
      return deviceId;
    } else {
      const newDeviceId = generateUniqueDeviceId(); // Replace with your secure unique ID generation
      await AsyncStorage.setItem('uniqueDeviceId', newDeviceId);
      return newDeviceId;
    }
  } catch (error) {
    console.error('Error getting/setting device ID:', error);
    return null; // Or handle the error appropriately
  }
};

const generateUniqueDeviceId = () => { //replace with secure id generation
  //Generate a secure, unique device ID using a suitable method (UUID, server-side generation, etc.)
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export default getUniqueDeviceIdAsync;