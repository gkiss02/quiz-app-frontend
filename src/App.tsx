import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import RootLayout from "./Components/RootLayout";
import Main from "./Pages/Main";
import Question from "./Pages/Question";
import Questions from "./Context/Questions";
import Time from "./Context/Time";
import Result from "./Pages/Result";
import Settings from "./Pages/Settings";
import Leaderboard from "./Pages/Leaderboard";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";
import { checkAuthLoader, tokenLoader } from "./Util/auth"; 
import { logoutAction } from "./Util/logoutAction";


function App() {
  const router = createBrowserRouter([{
    path: "/",
    id: "root",
    element: <RootLayout></RootLayout> ,
    loader: tokenLoader,
    children: [
      { path: "/login", element: <Login></Login>},
      { path: "/register", element: <Register></Register>},
      { path: "/", element: <Main></Main>, loader: checkAuthLoader },
      { path: "/question", element: <Question></Question>, loader: checkAuthLoader },
      { path: "/result", element: <Result></Result>, loader: checkAuthLoader },
      { path: "/settings", element: <Settings></Settings>, loader: checkAuthLoader },
      { path: "/leaderboard", element: <Leaderboard></Leaderboard>, loader: checkAuthLoader },
      { path: "*", element: <ErrorPage></ErrorPage> },
      { path: "/logout", action: logoutAction}
    ]
  }])
  
  return (
    <Questions>
      <Time>
        <RouterProvider router={router}></RouterProvider>
      </Time>
    </Questions>
  );
}

export default App;
