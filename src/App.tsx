import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import RootLayout from "./Components/RootLayout";
import Main from "./Pages/Main";
import Question from "./Pages/Question";
import Questions from "./Context/Questions";
import Time from "./Context/Time";
import Result from "./Pages/Result";
import Score from "./Context/Score";
import Settings from "./Pages/Settings";
import Leaderboard from "./Pages/Leaderboard";
import ErrorPage from "./Pages/ErrorPage";
import Register from "./Pages/Register";


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout></RootLayout> ,
    children: [
      { path: "/", element: <Login></Login>},
      { path: "/register", element: <Register></Register>},
      { path: "/main", element: <Main></Main> },
      { path: "/question", element: <Question></Question> },
      { path: "/result", element: <Result></Result> },
      { path: "/settings", element: <Settings></Settings> },
      { path: "/leaderboard", element: <Leaderboard></Leaderboard> },
      { path: "*", element: <ErrorPage></ErrorPage> }
    ]
  }])

  return (
    <Questions>
      <Time>
        <Score>
          <RouterProvider router={router}></RouterProvider>
        </Score>
      </Time>
    </Questions>
  );
}

export default App;
