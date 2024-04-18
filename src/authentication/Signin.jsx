import { useState } from 'react';
import LoginWithEmail from './LoginWithEmail';

import { MdOutlineEmail } from 'react-icons/md';
import { IoLogoApple } from 'react-icons/io5';
import { useForm } from 'react-hook-form';

const Signin = ({ setShowModal }) => {
  const [focusInput, setFocusInput] = useState(false);
  const [showLoginEmail, setShowLoginEmail] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onChange',
  });

  const submitHandler = mob => {
    console.log(mob);
  };

  if (showLoginEmail)
    return <LoginWithEmail setShowLoginEmail={setShowLoginEmail} />;

  return (
    <div className='flex justify-center items-center w-full h-full absolute top-0 bg-black/15'>
      <form
        className='w-96 p-8 border mx-auto rounded-md bg-white relative animateDown'
        onSubmit={handleSubmit(submitHandler)}
      >
        <span
          className='block text-2xl text-gray-500 hover:text-gray-600 absolute top-1 right-3 cursor-pointer'
          onClick={() => setShowModal(false)}
        >
          &times;
        </span>
        <h3 className='text-center mb-6'>Get Started</h3>

        <div className='py-3 text-sm text-gray-600 font-medium flex border border-gray-400 items-center gap-16 rounded hover:bg-gray-100 hover:border-gray-200 mb-4 cursor-pointer transition'>
          <img
            src='/images/google-icon.webp'
            alt='goole-icon'
            className='w-5 ml-3'
          />
          <span>Continue with Google</span>
        </div>

        <div
          className='py-3 text-sm text-gray-600 font-medium flex border border-gray-400 items-center gap-16 rounded hover:bg-gray-100 hover:border-gray-200 mb-4 cursor-pointer transition'
          onClick={() => setShowLoginEmail(true)}
        >
          <MdOutlineEmail size='1.3rem' className='ml-3' />
          <span className='ml-2'>Continue with Email</span>
        </div>

        <div className='py-3 text-sm text-gray-600 font-medium flex border border-gray-400 items-center gap-16 rounded hover:bg-gray-100 hover:border-gray-200 mb-4 cursor-pointer transition'>
          <IoLogoApple size='1.3rem' className='ml-3 text-black' />
          <span className='ml-2'>Continue with Apple</span>
        </div>

        <p className='text-center text-gray-500 mt-4 mb-10'>OR</p>

        <div className='flex flex-col justify-center gap-1 mb-24'>
          <div className='flex items-center justify-center gap-2'>
            <label htmlFor='mobile' className='text-sm text-gray-500'>
              +91
            </label>

            <input
              type='text'
              id='mobile'
              placeholder='Continue with mobile number'
              className='text-sm text-gray-500 outline-none border-b border-gray-300 py-1 focus:border-red-500 hover:border-gray-400'
              onClick={() => setFocusInput(true)}
              {...register('mobileNumber', {
                required: 'Number required!',
                minLength: {
                  value: 10,
                  message: '10 digits required',
                },
                maxLength: {
                  value: 10,
                  message: '10 digits requried',
                },
              })}
            />
          </div>

          {errors?.mobileNumber?.message && (
            <p className='text-sm text-red-500 text-center'>
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        {focusInput ? (
          <button
            className={`font-bold text-white bg-gray-300 w-full py-3 rounded-lg ${
              isDirty && !Object.keys(errors).length && 'hover:bg-pink-600'
            }`}
          >
            Continue
          </button>
        ) : (
          <p className='text-xs text-gray-500 text-center'>
            I agree to the{' '}
            <span className='underline cursor-pointer'>
              Terms and Conditions
            </span>{' '}
            & <span className='underline cursor-pointer'>Privacy Policy</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signin;
