import axios from 'axios';
import BASE_API from '../constant';

export const singupLogin = async function (email) {
  try {
    const res = await axios.post(
      `${BASE_API}/api/v1/auth/login-by-email`,
      email
    );

    if (res?.data?.data) return res?.data;
  } catch (err) {
    if (err?.response) return err?.response?.data;
  }
};
