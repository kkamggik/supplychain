import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarPage() {
    return(
        <Navbar expand="lg" style={{backgroundColor:"rgba(255, 0, 0, 0.1)"}}>
            <Container fluid>
                <Navbar.Brand><Link to="/" style={{textDecoration:"none", color:"black"}}>Medicine Tracker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-light-example" title="Accounts" menuVariant="light" >
                            <NavDropdown.Item><Link to="/scan" style={{textDecoration:"none", color:"black"}}>Scan</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/" style={{textDecoration:"none", color:"black"}}>Something</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><Link to="/login" style={{textDecoration:"none"}}>Logout</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarPage;