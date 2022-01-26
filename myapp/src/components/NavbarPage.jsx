import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function NavbarPage() {
    return(
        <Navbar variant="light" bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Medicine Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <NavDropdown id="nav-dropdown-light-example" title="Accounts" menuVariant="light" >
                            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="/">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarPage;