import { useEffect, useRef, useState } from 'react';

import Navigation from '../ui/Navigation';

const Home = ({ city, setCity }) => {
  const [showLocationModal, setShowLocationModal] = useState(true);
  const ref = useRef();

  useEffect(() => {
    const appContainer = ref.current;
    appContainer.addEventListener('keydown', e => {
      if (e.key.toLowerCase() === 'escape') setShowLocationModal(false);
    });
  }, []);

  return (
    <header>
      <div ref={ref}>
        <Navigation
          city={city}
          setCity={setCity}
          showLocationModal={showLocationModal}
          setShowLocationModal={setShowLocationModal}
        />
      </div>

      <div className='bg-gray-100 flex items-center justify-between px-64 py-3'>
        <div className='flex gap-5 text-sm text-gray-800'>
          <p>Movies</p>
          <p>Streams</p>
          <p>Events</p>
          <p>Plays</p>
          <p>Sports</p>
          <p>Activities</p>
        </div>
        <div className='flex gap-5 text-xs text-gray-800'>
          <p>ListYourShow</p>
          <p>Coporates</p>
          <p>Offers</p>
          <p>Gift Cards</p>
        </div>
      </div>
    </header>
  );
};

export default Home;
