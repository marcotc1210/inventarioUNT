import axios from 'axios';

const endpoint = "https://stunning-barnacle-q7pjqwj7wvw734j6q-8000.app.github.dev/api";

export const getDeviceCount = async () => {
  try {
    const response = await axios.get(`${endpoint}/devices/count`);
    return response.data; // Suponiendo que tu API devuelve un objeto con los conteos
  } catch (error) {
    console.error('Error fetching device count:', error);
    return null;
  }
};

export const getInactiveDeviceCount = async () => {
  try {
    const response = await axios.get(`${endpoint}/devices/inactive-count`);
    return response.data; // Conteo de dispositivos inactivos
  } catch (error) {
    console.error('Error fetching inactive device count:', error);
    return null;
  }
};

export const getRegularDeviceCount = async () => {
  try {
    const response = await axios.get(`${endpoint}/devices/regular-count`);
    return response.data; // Conteo de dispositivos en estado regular
  } catch (error) {
    console.error('Error fetching regular device count:', error);
    return null;
  }
};
