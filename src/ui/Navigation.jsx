import { useState } from 'react';

import ModalLocation from './ModalLocation';
import LocationSearch from './LocationSearch';
import Signin from '../authentication/Signin';
import Logo from './Logo';

import { IoIosArrowDown } from 'react-icons/io';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Navigation = ({
  showLocationModal,
  setShowLocationModal,
  city,
  setCity,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='py-2'>
      <header className='flex justify-center items-center'>
        <Logo />

        <div className='w-1/3 mr-72'>
          <LocationSearch
            detectLocation={false}
            placeholder='Search for Movies, Events, Plays, Sports and Activities'
          />
        </div>

        <button
          className='text-sm mr-6'
          onClick={() => setShowLocationModal(true)}
        >
          <span className='truncate w-16'>
            {city ? (
              <>
                {city}
                <IoIosArrowDown color='#555' />
              </>
            ) : (
              'Select your city'
            )}
          </span>
        </button>

        <button
          className='text-xs bg-rose-500 py-1 px-3 text-white rounded mr-6'
          onClick={() => setShowModal(true)}
        >
          Sign in
        </button>

        <button>
          <IoReorderThreeOutline size='1.8rem' color='#444' />
        </button>
      </header>

      <main></main>

      {showModal && <Signin setShowModal={setShowModal} />}

      {showLocationModal && (
        <ModalLocation
          setShowLocationModal={setShowLocationModal}
          city={city}
          setCity={setCity}
        />
      )}
    </div>
  );
};

export default Navigation;
