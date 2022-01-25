import React from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function HomePage(props){
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Products</Nav.Link>
                        <Nav.Link href="/medicine">Add</Nav.Link>
                        <Nav.Link href="/">Shipping</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div class="home_container">
                <div class="home">
                    <table class="medicine_table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>타이레놀</td>
                                <td>02-20-2021</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default HomePage;