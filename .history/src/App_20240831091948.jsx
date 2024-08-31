import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<RootLayout />}>
    <Route index element={<Home/>}/>
    <Route path="mars" element ={<Mars/>}/>
    <Route path="venus" element = {<Venus/>}/>
    <Route path="orion"
  </Route>)
);

function App() {
  return <></>;
}

export default App;
