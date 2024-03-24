import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { GoChevronLeft } from 'react-icons/go';

import LoginWithOTP from './LoginWithOTP';
import { singupLogin } from '../services/signupLogin';
import SpinnerMini from '../ui/SpinnerMini';

const SignWithEmail = ({ setShowLoginEmail }) => {
  const [showLoginWithOTP, setShowLoginWithOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const submitHandler = async email => {
    setIsLoading(true);
    const data = await singupLogin(email);

    if (data.status === 'success') {
      toast.success('OTP sent to the email address', { id: 'success' });

      localStorage.setItem('email', JSON.stringify(email));

      reset();
      setIsLoading(false);
      setShowLoginWithOTP(true);
    }

    if (data.status === 'fail') {
      toast.error(data.message, { id: 'error' });
      setIsLoading(false);
    }
  };

  if (showLoginWithOTP)
    return (
      <LoginWithOTP
        setShowLoginWithOTP={setShowLoginWithOTP}
        setShowLoginEmail={setShowLoginEmail}
      />
    );

  return (
    <div className='flex justify-center items-center w-full h-full absolute top-0 bg-black/15'>
      <div
        className='w-96 p-8 border mx-auto rounded-md bg-white relative'
        style={{ height: '504px' }}
      >
        <span
          className='block text-2xl text-gray-700 hover:text-gray-900 absolute top-4 left-5 cursor-pointer'
          onClick={() => setShowLoginEmail(false)}
        >
          <GoChevronLeft />
        </span>

        <form
          className='h-full flex flex-col gap-8'
          onSubmit={handleSubmit(submitHandler)}
        >
          <p className='text-2xl font-medium text-gray-800 mt-16'>
            Login with Email
          </p>

          <div>
            <label className='text-sm text-gray-700 mb-1'>Email</label>

            <input
              type='text'
              className='border w-full px-2 py-1 rounded hover:border-gray-400 outline-none focus:border-gray-400'
              {...register('email', {
                required: 'Email is required',
                minLength: {
                  value: 4,
                  message: 'Min. length 4',
                },
                maxLength: { value: 30, message: 'Max. length 30' },
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
            />

            {errors?.email?.message && (
              <p className='mt-1 text-sm text-red-500'>
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            className={`mt-auto border rounded-md py-2 bg-gray-300 text-white font-medium ${
              isDirty && !Object.keys(errors).length && 'bg-pink-600'
            }`}
            disabled={isLoading}
          >
            {isLoading ? <SpinnerMini /> : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignWithEmail;
