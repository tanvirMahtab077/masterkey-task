import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/rootLayout/RootLayout";
import Home from './pages/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    //routes
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
