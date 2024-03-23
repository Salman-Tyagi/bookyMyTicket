import axios from 'axios';
import BASE_API from '../constant';

const verifyEmail = async payload => {
  try {
    const res = await axios.post(
      `${BASE_API}/api/v1/auth/verify-email`,
      payload
    );

    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export default verifyEmail;
