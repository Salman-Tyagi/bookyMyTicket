import { RotatingLines } from 'react-loader-spinner';

const SpinnerMini = () => (
  <div className='flex justify-center items-center'>
    <RotatingLines
      visible={true}
      height='25'
      width='25'
      strokeColor='#fff'
      strokeWidth='5'
      animationDuration='0.75'
      ariaLabel='rotating-lines-loading'
    />
  </div>
);

export default SpinnerMini;
