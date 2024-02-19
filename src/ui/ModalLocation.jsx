import LocationSearch from './LocationSearch';
import HorizontalLine from './HorizontalLine';
import PopulatCities from './PopulatCities';
import AllCities from './AllCities';

const ModalLocation = ({ setShowLocationModal, city, setCity }) => {
  return (
    <div
      className='absolute top-0 w-full h-full bg-black/50'
      onClick={() => setShowLocationModal(false)}
    >
      <div
        className='bg-white p-4 animateDown mt-14 max-w-screen-lg mx-auto'
        onClick={e => e.stopPropagation()}
      >
        <LocationSearch
          detectLocation={true}
          placeholder='Search for your city'
        />
        <HorizontalLine />
        <PopulatCities city={city} setCity={setCity} />
        <AllCities />
      </div>
    </div>
  );
};

export default ModalLocation;
