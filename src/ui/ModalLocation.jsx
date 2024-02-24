import LocationSearch from './LocationSearch';
import HorizontalLine from './HorizontalLine';
import PopularCities from './PopularCities';
import AllCities from './AllCities';

const ModalLocation = ({ setShowLocationModal, city, setCity }) => {
  return (
    <div className='absolute top-0 w-full h-full bg-black/50'>
      <div className='bg-white p-4 animateDown mt-14 max-w-screen-lg mx-auto'>
        <LocationSearch
          detectLocation={true}
          placeholder='Search for your city'
        />

        <HorizontalLine />

        <PopularCities
          city={city}
          setCity={setCity}
          setShowLocationModal={setShowLocationModal}
        />

        <AllCities />
      </div>
    </div>
  );
};

export default ModalLocation;
