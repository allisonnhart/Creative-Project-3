import { Outlet, Link } from "react-router-dom";
import styles from './Project-Layout.css';
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <div class = "links">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/about-me">About-Us</Link>
          </li>
          <li>
            <Link to="/search-cryptids">Find-Cryptids-Near-You</Link>
          </li>
          <li>
            <Link to="/App2">Submit-Cryptid</Link>
          </li>
          </div>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;