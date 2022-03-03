import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarPage() {
    return(
        <Navbar expand="lg" style={{borderBottom: "solid 1px lightgray"}}>
            <Container fluid>
                <Navbar.Brand><Link to="/" style={{textDecoration:"none", color:"black"}}>Medicine Tracker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-light-example" title="Accounts" menuVariant="light" >
                            <NavDropdown.Item><Link to="/scan" style={{textDecoration:"none", color:"black"}}>Scan</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/users" style={{textDecoration:"none", color:"black"}}>Users</Link></NavDropdown.Item>
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