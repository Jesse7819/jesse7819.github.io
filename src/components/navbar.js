import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function newNavbar() {
    return (
        
        <div className="navbarbg">
        <Navbar expand="md">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/">Jesse Sosef</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">Over mij</Nav.Link>
                        <NavDropdown title="Cases" id="basic-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/dobbelspel">Dobbelspel</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/helloworld">Hello World</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/loops">For/While loops</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/magic8ball">Magic8Ball</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
        
    );
}

export default newNavbar;
