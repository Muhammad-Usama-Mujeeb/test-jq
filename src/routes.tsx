import HomePage from './pages/HomePage';
import JobScorePage from './pages/JobScorePage';
import SignInPage from './pages/SignInPage';

// Define routes as an array of route objects
const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    path: '/job-score',
    element: <JobScorePage />, 
  },
];

export default routes;