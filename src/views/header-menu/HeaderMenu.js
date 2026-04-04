import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function HeaderMenu() {
  const { user, profile, logout } = useContext(AuthContext);

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          AOA-78 Services Portal
        </Link>

        <Navbar.Toggle aria-controls="navbarNavDropdown" />

        <Navbar.Collapse id="navbarNavDropdown">
          <Nav className="ml-auto">
            <Nav.Item>
              <NavLink to="/" exact={true} className="nav-link">
                Home
              </NavLink>
            </Nav.Item>
            <li className="nav-item">
              <NavLink to="/search-requests" className="nav-link">
                Check Status
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/select-request-type" className="nav-link">
                New Request
              </NavLink>
            </li>
            {!user ? (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <span className="nav-link">
                    {profile?.displayName || user.email?.split('@')[0]}
                  </span>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={(e) => { e.preventDefault(); logout(); }}
                  >
                    Logout
                  </a>
                </li>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
