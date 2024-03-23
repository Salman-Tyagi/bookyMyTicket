import { useForm } from 'react-hook-form';
import { GoChevronLeft } from 'react-icons/go';
import verifyEmail from '../services/verifyEmail';
import getEmail from '../services/getEmail';

const LoginWithOTP = ({ setShowLoginEmail }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'onChange',
  });

  const submitHandler = obj => {
    const email = getEmail();
    const payload = { ...obj, email };

    const data = verifyEmail(payload);
    if (data.successs === 'success') console.log(data);
  };

  return (
    <div className='flex justify-center items-center w-full h-full absolute top-0 bg-black/15'>
      <div
        className='w-96 p-8 border mx-auto rounded-md bg-white relative'
        style={{ height: '504px' }}
      >
        <GoChevronLeft
          className='block text-2xl text-gray-700 hover:text-gray-900 absolute top-4 left-5 cursor-pointer'
          onClick={() => setShowLoginEmail(false)}
        />

        <form
          className='h-full flex flex-col'
          onSubmit={handleSubmit(submitHandler)}
        >
          <p className='text-2xl font-medium text-gray-800 mt-16'>
            Verify your Email Address
          </p>

          <p className='text-sm text-gray-500 mb-6'>
            Enter OTP sent to
            <span className='font-semibold'> {getEmail()}</span>
          </p>

          <input
            className='outline-none border rounded-md px-3 py-2 hover:border-gray-400 focus:border-gray-400'
            {...register('OTP', {
              required: 'OTP is required',
              minLength: {
                value: 6,
                message: 'Should be 6 digits',
              },
              maxLength: {
                value: 6,
                message: 'Should be 6 digits',
              },
              pattern: {
                value: /^[0-9]*$/,
                message: 'Only numbers allowed',
              },
            })}
          />
          {errors?.OTP?.message && (
            <p className='mt-1 text-sm text-red-500'>{errors.OTP.message}</p>
          )}

          <div className='mt-auto'>
            <p className='text-sm text-gray-500 text-center mb-3 cursor-pointer'>
              Didn&apos;t receive OTP?
              <span className='text-red-500'> Resend OTP</span>
            </p>

            <button
              className={`w-full border rounded-md py-2 bg-gray-300 text-white font-medium ${
                isDirty && !Object.keys(errors).length && 'bg-pink-600'
              }`}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginWithOTP;
