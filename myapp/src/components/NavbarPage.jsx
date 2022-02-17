import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function NavbarPage() {
    return(
        <Navbar variant="light" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Medicine Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-light-example" title="More" menuVariant="light" >
                            <NavDropdown.Item href="/scan">Scan</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarPage;