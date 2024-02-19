import { useState } from 'react';
import Home from './pages/Home';

const App = () => {
  const [city, setCity] = useState(null);

  return <Home city={city} setCity={setCity} />;
};
export default App;
