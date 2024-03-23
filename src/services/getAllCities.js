import axios from 'axios';
import BASE_API from '../constant';

export const getAllCities = async () => {
  try {
    const res = await axios.get(`${BASE_API}/api/v1/cities`);
    if (res?.data?.status) return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
