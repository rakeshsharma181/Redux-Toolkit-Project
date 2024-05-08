import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function NavBar() {
  const cartItem = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" bg = "light">
      <Container>
        <Navbar.Brand href="/">React-Redux-Toolkit</Navbar.Brand>
          <Nav >
            <Nav.Link to = "/" as = {Link}>Products</Nav.Link>
          </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link to = "/cart" as = {Link}>My Bag {cartItem.length}</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;