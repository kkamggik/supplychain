import React from "react";
import { useParams } from 'react-router-dom';
import NavbarPage from './NavbarPage';
import {Button} from 'react-bootstrap';


function QRcodePage(props) {
    const {id} = useParams();
    const url = "https://api.qrserver.com/v1/create-qr-code/?data="+id+"&amp;size=100x100"
    return(
        <div className="home_container">
            <div className="home">
                <NavbarPage />
                <div className="qr_container">
                    <img src={url} alt="" title="qrcode"/>
                </div>
                {/* <div className="qr_container">
                    <Button variant="warning">Download</Button>
                </div> */}
            </div>
        </div>
    );
}
export default QRcodePage;