import AnimationLayout from "components/AnimationLayout";
import ErrorPage from "components/ErrorPage";
import HomePage from "components/HomePage";
import ImageInfoPage from "components/ImageInfoPage";
import { Route, Routes } from "react-router";

const App = () => (
  <Routes>
    <Route element={<AnimationLayout />}>
      <Route path="/test-task" element={<HomePage />} />
      <Route path="/test-task/details/:imageName" element={<ImageInfoPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  </Routes>
);

export default App;
