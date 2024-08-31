import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <NavBar />
      <NavigateBackButton />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<ContentPAge />} />
      </Routes>
    </Router>
  );
}

export default App;
