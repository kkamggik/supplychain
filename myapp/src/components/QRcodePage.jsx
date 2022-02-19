import React from "react";
import { useParams } from 'react-router-dom';
import NavbarPage from './NavbarPage';


function QRcodePage() {
    const {id} = useParams();
    const url = "https://api.qrserver.com/v1/create-qr-code/?data="+id+"&amp;size=100x100"
    return(
        <div className="navbar_container">
            <NavbarPage />
            <div className="home_container">
                {/* <div className="home">
                </div> */}
            </div>
        </div>
    );
}
export default QRcodePage;