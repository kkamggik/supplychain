import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CgPill } from "react-icons/cg";


function NavbarPage() {
    const current_user = JSON.parse(window.localStorage.getItem("user")).identity;
    return(
        <Navbar expand="lg" style={{borderBottom: "solid 1px lightgray"}}>
            <Container fluid>
                <Navbar.Brand><Link to="/" style={{textDecoration:"none", color:"tomato"}}>Medicine Tracker<CgPill/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-light-example" />
                <Navbar.Collapse id="navbar-light-example">
                    <Nav>
                        <Nav.Link><Link to="/scan" style={{textDecoration:"none", color:"black"}}>Scan</Link></Nav.Link>
                        <Nav.Link><Link to="/transit" style={{textDecoration:"none", color:"black"}}>In Transit</Link></Nav.Link>
                        <NavDropdown id="nav-dropdown-light-example" title="Accounts" menuVariant="light">
                        <NavDropdown.Item><Link to="/users" style={{textDecoration:"none", color:"black"}}>Profile</Link></NavDropdown.Item>
                        {current_user === "1" ? <NavDropdown.Item><Link to="/users" style={{textDecoration:"none", color:"black"}}>Users</Link></NavDropdown.Item> : ""}
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