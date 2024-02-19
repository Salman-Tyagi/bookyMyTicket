import { useState } from 'react';

const AllCities = () => {
  const [showCities, setShowCities] = useState(false);

  return (
    <div className='mt-8'>
      {showCities && (
        <div className='mt-3 overflow-y-auto  h-36'>
          <div className='flex justify-center mb-4'>
            <button className='text-sm'>Other Cities</button>
          </div>

          <div className='grid grid-cols-5 text-xs text-gray-400'>
            <div>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>

              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
            </div>

            <div>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>

              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
            </div>

            <div>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>

              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
            </div>

            <div>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>

              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
            </div>

            <div>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>

              <p className='hover:text-gray-600 cursor-pointer'>Alibaug</p>
              <p className='hover:text-gray-600 cursor-pointer'>Alakode</p>
              <p className='hover:text-gray-600 cursor-pointer'>Akbarpur</p>
              <p className='hover:text-gray-600 cursor-pointer'>Ahmednagar</p>
              <p className='hover:text-gray-600 cursor-pointer'>Agar Malwa</p>
              <p className='hover:text-gray-600 cursor-pointer'>Addanki</p>
              <p className='hover:text-gray-600 cursor-pointer'>Aalo</p>
            </div>
          </div>
        </div>
      )}

      <div className='flex justify-center mt-4'>
        <button
          className='text-sm text-red-500'
          onClick={() => setShowCities(show => !show)}
        >
          {showCities ? 'Hide All Cities' : 'View All Cities'}
        </button>
      </div>
    </div>
  );
};

export default AllCities;
