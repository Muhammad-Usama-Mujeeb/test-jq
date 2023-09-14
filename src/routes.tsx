import HomePage from './pages/HomePage';
import JobScorePage from './pages/JobScorePage';

// Define routes as an array of route objects
const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/job-score',
    element: <JobScorePage />, 
  },
];

export default routes;