import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Error from './ui/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [{ path: 'explorer', element: <Home /> }],
  },
  {
    path: '*',
    element: <Error />,
  },
]);

const App = () => <RouterProvider router={router} />;
export default App;
