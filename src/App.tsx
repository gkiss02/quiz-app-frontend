import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Pages/Login';
import RootLayout from './Components/RootLayout';
import Main from './Pages/Main';
import Question from './Pages/Question';
import Questions from './Context/Questions';
import Time from './Context/Time';
import Result from './Pages/Result';
import Settings from './Pages/Settings';
import Leaderboard from './Pages/Leaderboard';
import ErrorPage from './Pages/ErrorPage';
import Register from './Pages/Register';
import { checkAuthLoader, refreshToken, tokenLoader } from './util/auth'; 
import { logoutAction } from './util/logoutAction';
import ConfirmEmail from './Pages/ConfirmEmail';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { useEffect } from 'react';
import ErrorToasterState from './Context/ErrorToasterState';
import SuccessToasterState from './Context/SuccessToasterState';
import ErrorToaster from './Components/Toasters/ErrorToaster';
import SuccessToaster from './Components/Toasters/SuccessToaster';


function App() {
  useEffect (() => {
    (async function() {
      await refreshToken();
    })();
  }, [])

  const router = createBrowserRouter([{
    path: '/',
    id: 'root',
    element: <RootLayout></RootLayout> ,
    loader: tokenLoader,
    children: [
      { path: '/login', element: <Login></Login>},
      { path: '/register', element: <Register></Register>},
      { path: '/', element: <Main></Main>, loader: checkAuthLoader },
      { path: '/question', element: <Question></Question>, loader: checkAuthLoader },
      { path: '/result', element: <Result></Result>, loader: checkAuthLoader },
      { path: '/settings', element: <Settings></Settings>, loader: checkAuthLoader },
      { path: '/leaderboard', element: <Leaderboard></Leaderboard>, loader: checkAuthLoader },
      { path: '*', element: <ErrorPage></ErrorPage> },
      { path: '/logout', action: logoutAction},
      { path: '/confirm-email', element: <ConfirmEmail></ConfirmEmail> },
      { path: '/forgot-password', element: <ForgotPassword></ForgotPassword> },
      { path: '/reset-password', element: <ResetPassword></ResetPassword> },
    ]
  }])
  
  return (
    <Questions>
      <Time>
        <ErrorToasterState>
          <SuccessToasterState>
            <SuccessToaster />
            <ErrorToaster />
            <RouterProvider router={router}></RouterProvider>
          </SuccessToasterState>
        </ErrorToasterState>
      </Time>
    </Questions>
  );
}

export default App;
