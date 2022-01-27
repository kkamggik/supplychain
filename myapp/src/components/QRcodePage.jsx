import React from "react";
import { useParams } from 'react-router-dom';

function QRcodePage(props) {
    const {id} = useParams();
    const url = "https://api.qrserver.com/v1/create-qr-code/?data="+id+"&amp;size=100x100"
    return(
        <div>
            <div>Download this QRcode below</div>
            {console.log(id)}
            <img src={url} alt="" title="qrcode"/>
        </div>

    );
}
export default QRcodePage;