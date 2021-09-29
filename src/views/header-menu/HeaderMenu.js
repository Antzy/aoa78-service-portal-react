import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function HeaderMenu() {
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
              <NavLink to="/new-request" className="nav-link">
                New Request
              </NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
