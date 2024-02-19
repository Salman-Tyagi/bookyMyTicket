import { useEffect, useRef } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { MdMyLocation } from 'react-icons/md';

export const LocationSearch = ({ detectLocation, placeholder }) => {
  const ref = useRef();

  useEffect(() => {
    const inputSearchEl = ref.current;
    inputSearchEl.focus();
  }, []);

  return (
    <>
      <div className='flex items-center gap-8 border rounded py-2 pl-4'>
        <IoMdSearch />
        <input
          ref={ref}
          type='text'
          placeholder={placeholder}
          className='outline-none w-full text-sm pr-1'
        />
      </div>

      {detectLocation && (
        <button className='flex items-center gap-2 text-red-400 text-sm mt-3'>
          <MdMyLocation /> Detect my location
        </button>
      )}
    </>
  );
};

export default LocationSearch;
