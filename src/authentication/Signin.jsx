import { useState } from 'react';

const Signin = ({ setShowModal }) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <div className='flex justify-center items-center w-full h-full absolute top-0 bg-black/15'>
      <form className='w-96 p-8 border mx-auto rounded-md bg-white relative animateDown'>
        <span
          className='block text-2xl text-gray-500 hover:text-gray-600 absolute top-1 right-3 cursor-pointer'
          onClick={() => setShowModal(false)}
        >
          &times;
        </span>
        <h3 className='text-center mb-6'>Get Started</h3>

        <div className='py-3 text-sm text-gray-600 font-medium flex justify-center border border-gray-400 items-center rounded hover:bg-gray-100 hover:border-gray-100 mb-4 cursor-pointer'>
          Continue with Google
        </div>

        <div className='py-3 text-sm text-gray-600 font-medium flex justify-center border border-gray-400 items-center rounded hover:bg-gray-100 hover:border-gray-100 mb-4 cursor-pointer'>
          Continue with Email
        </div>

        <div className='py-3 text-sm text-gray-600 font-medium flex justify-center border border-gray-400 items-center rounded hover:bg-gray-100 hover:border-gray-100 mb-4 cursor-pointer'>
          Continue with Apple
        </div>

        <p className='text-center text-gray-500 mt-4 mb-10'>OR</p>

        <div className='flex justify-center items-center gap-1 mb-24'>
          <p className='text-sm text-gray-500'>+91</p>
          <input
            type='text'
            placeholder='Continue with mobile number'
            className='text-sm text-gray-500 outline-none border border-t-0  border-r-0 border-l-0 border-gray-300 py-1 focus:border-red-500 hover:border-gray-400'
            onClick={() => setFocusInput(true)}
          />
        </div>

        {focusInput ? (
          <button className='font-bold text-white bg-gray-300 w-full py-3 rounded-lg hover:bg-pink-600'>
            Continue
          </button>
        ) : (
          <p className='text-xs text-gray-500 text-center'>
            I agree to the{' '}
            <span className='underline'>Terms and Conditions</span> &{' '}
            <span className='underline'>Privacy Policy</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Signin;
