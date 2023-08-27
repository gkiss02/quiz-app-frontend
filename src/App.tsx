import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import RootLayout from "./Components/RootLayout";
import Main from "./Pages/Main";
import Question from "./Pages/Question";
import Questions from "./Context/Questions";
import Time from "./Context/Time";
import Result from "./Pages/Result";
import Score from "./Context/Score";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout></RootLayout> ,
    children: [
      { path: "/", element: <LandingPage></LandingPage>},
      { path: "/main", element: <Main></Main> },
      { path: "/question", element: <Question></Question> },
      { path: "/result", element: <Result></Result> }
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
