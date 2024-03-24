import axios from 'axios';
import BASE_API from '../constant';

const verifyEmail = async payload => {
  try {
    const res = await axios.post(
      `${BASE_API}/api/v1/auth/verify-email`,
      payload
    );

    return res?.data && res?.data;
  } catch (err) {
    if (err?.response) return err?.response?.data;
  }
};

export default verifyEmail;
