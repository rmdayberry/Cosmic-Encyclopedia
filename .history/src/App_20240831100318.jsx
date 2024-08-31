import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import NavigateBackButton from "./NavigateBackButton";

//pages
import Homepage from "./pages/Homepage";
import ContentPage from "./pages/ContentPage";

function App() {
  return (
    <Router>
      <NavBar />
      <NavigateBackButton />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<ContentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
