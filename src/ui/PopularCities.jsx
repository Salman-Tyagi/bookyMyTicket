import { useEffect, useState } from 'react';
import { getAllCities } from '../services/getAllCities';

const PopularCities = ({ city, setCity, setShowLocationModal }) => {
  const [cities, setCities] = useState([]);

  const getCities = async () => {
    const data = await getAllCities();
    setCities(data);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className='hidden lg:block'>
      <p className='text-center text-sm my-4 text-slate'>Popular Cities</p>

      <ul className='grid grid-cols-9'>
        {cities.map((city, i) => (
          <li
            className='text-gray-500 hover:text-gray-800 text-sm flex flex-col items-center cursor-pointer'
            onClick={e => {
              setCity(e.currentTarget.textContent);
              setShowLocationModal(false);
            }}
            key={i + 1}
          >
            <img src={`/images/${city.image}`} alt={`city${city.name}`} />
            {city.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCities;
