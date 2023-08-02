import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./Cart/cartItems";

const NavBar = () => {
  return (
    <>
      <Navbar bg="warning" variant="light" expand="lg">
        <Container>
          <Nav>
            <Nav.Item>
              <NavLink to="/home" style={{ marginRight: "50px" }}>
                <b>Home</b>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/store" style={{ marginRight: "50px" }}>
                <b>Store</b>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/aboutUs" style={{ marginRight: "50px" }}>
                <b>About Us</b>
              </NavLink>
            </Nav.Item>
          </Nav>
          <div className="d-flex justify-content-end">
            <Cart />
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
