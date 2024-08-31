import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/planets">Planets</Link>
      <Link to="/stars">Stars</Link>
      <Link to="/galaxies">Galaxies</Link>
    </nav>
  );
}
