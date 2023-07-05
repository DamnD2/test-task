import ErrorPage from "components/ErrorPage";
import HomePage from "components/HomePage";
import ImageInfoPage from "components/ImageInfoPage";
import { useRoutes } from "react-router";

const App = () =>
  useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/details/:imageName", element: <ImageInfoPage /> },
    { path: "*", element: <ErrorPage /> },
  ]);

export default App;
