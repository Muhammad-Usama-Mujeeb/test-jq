import HomePage from './pages/HomePage';

// Define routes as an array of route objects
const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: <HomePage />,
  },
];

export default routes;