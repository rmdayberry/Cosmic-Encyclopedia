import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}/>
    <
  </Route>)
);

function App() {
  return <></>;
}

export default App;
