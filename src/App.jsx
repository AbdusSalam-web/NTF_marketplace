import {
  createRoutesFromElements,
  Route,
  RouterProvider, createBrowserRouter
} from "react-router-dom";
import "./App.css";
import LayOut from "./layout/LayOut";
import Home from "./pages/Home";


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute}></RouterProvider>
    </>
  );
}

export default App;
