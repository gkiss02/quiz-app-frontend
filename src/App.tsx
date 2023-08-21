import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import Main from "./Pages/Main";
import Question from "./Pages/Question";
import Questions from "./Context/Questions";

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
      <RouterProvider router={router}></RouterProvider>
    </Questions>
  );
}

export default App;
