import { useState } from 'react';

const PopulatCities = ({ city, setCity }) => {
  const [showHoverMumbai, setShowHoverMumbai] = useState(false);
  const [showHoverDelhi, setShowHoverDelhi] = useState(false);
  const [showHoverChandigarh, setShowHoverChandigarh] = useState(false);

  return (
    <div className='hidden lg:block'>
      <p className='text-center text-sm my-4 text-slate'>Popular Cities</p>
      <div className='flex justify-center items-center gap-8 relative'>
        <div
          onMouseEnter={() => setShowHoverMumbai(true)}
          onMouseLeave={() => setShowHoverMumbai(false)}
          className='text-gray-500 hover:text-gray-800'
        >
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Mumbai
          </p>

          {showHoverMumbai && (
            <span className='flex gap-4 absolute left-0 w-full bg-gray-100 rounded text-sm p-4'>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Mumbai: Western
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Mumbai: South & Central
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Navi Mumbai
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Thane
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Ulhasnagar
              </p>
            </span>
          )}
        </div>

        <div
          onMouseEnter={() => setShowHoverDelhi(true)}
          onMouseLeave={() => setShowHoverDelhi(false)}
          className='text-gray-500 hover:text-gray-800'
        >
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Delhi-NCR
          </p>

          {showHoverDelhi && (
            <span className='flex gap-4 absolute left-0 w-full bg-gray-100 rounded text-sm p-4'>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Delhi
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Gurugram (Gurgaon)
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Noida
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Ghaziabad
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Kundli
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Greator Noida
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Faridabad
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Pilkhuwa
              </p>
            </span>
          )}
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/bang.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Bangalore
          </p>
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Hyderabad
          </p>
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Ahmedabad
          </p>
        </div>

        <div
          onMouseEnter={() => setShowHoverChandigarh(true)}
          onMouseLeave={() => setShowHoverChandigarh(false)}
          className='text-gray-500 hover:text-gray-800'
        >
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/chd.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Chandigarh
          </p>

          {showHoverChandigarh && (
            <span className='flex gap-4 absolute left-0 w-full bg-gray-100 rounded text-sm p-4'>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Zirakpur
              </p>
              <p className='cursor-pointer text-gray-500 hover:text-red-500'>
                Mohali
              </p>{' '}
            </span>
          )}
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/chen.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Chennai
          </p>
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/pune.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Pune
          </p>
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Kolkata
          </p>
        </div>

        <div className='text-gray-500 hover:text-gray-800'>
          <img
            src='https://in.bmscdn.com/m6/images/common-modules/regions/koch.png'
            alt='mumbai-icon'
            className='cursor-pointer'
          />
          <p
            className={`text-sm flex justify-center cursor-pointer ${
              city && 'text-blue-600'
            }`}
            onClick={e => setCity(e.target.innerText)}
          >
            Kochi
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopulatCities;
