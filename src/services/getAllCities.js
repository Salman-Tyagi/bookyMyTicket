import axios from 'axios';

const URL = 'http://localhost:3000';

export const getAllCities = async () => {
  try {
    const res = await axios.get(`${URL}/api/v1/cities`);
    if (res?.data?.status) return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
