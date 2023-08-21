import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Main from "./Pages/Main";
import Question from "./Pages/Question";
import Questions from "./Context/Questions";
import Time from "./Context/Time";

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout></RootLayout> ,
    children: [
      { path: "/", element: <Main></Main> },
      { path: "/question", element: <Question></Question> }
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
