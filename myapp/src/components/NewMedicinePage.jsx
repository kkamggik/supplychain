import React from "react";
import './custom.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function NewMedicinePage(props){
    const [name,setName] = React.useState('');
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());

    const navigate = useNavigate();
    
    const handleClick = (e) => {
        navigate("/");
    }
    const handleDate = (e) => {
        setStartDate(e)
        if(e >= endDate) setEndDate(e)
    }
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
                <div class="login">
                    <h2>Add a new medicine</h2>
                    <div class="input_container">
                        <h5>Name</h5>
                        <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div class="input_container">
                        <h5>Manufactured Date</h5>
                        <DatePicker selected={startDate} minDate={new Date()} onChange={handleDate} />
                    </div>
                    <div class="input_container">
                        <h5>Expiry Date</h5>
                        <DatePicker selected={endDate} minDate={startDate} onChange={(date) => setEndDate(date)} />
                    </div>
                    <div class = "submit">
                        <input type="button" onClick={handleClick} value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default NewMedicinePage;