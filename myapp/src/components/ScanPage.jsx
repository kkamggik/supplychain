import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";
import axios from 'axios';

function ScanPage() {

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [selectedFile, setSelectedFile] = useState(null);
    const [medId, setMedId] = useState(null);

    const navigate = useNavigate();

    async function getMedicine(serial) {
        const med = await contract.methods.getMedicineBySerial(serial).call();
        navigate("/medicine", { state: { medicine: med } })
    }

    const handleSubmit = (e) => {
        var bodyFormData = new FormData();
        bodyFormData.append("MAX_FILE_SIZE", "1048576");
        bodyFormData.append("file", selectedFile);
        axios({
            method: "post",
            url: "http://api.qrserver.com/v1/read-qr-code/",
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((result) => {
            const serial = result.data[0].symbol[0].data;
            getMedicine(serial);
        });
        e.preventDefault();
    }
    const handleButton = (e) => {
        getMedicine(medId);
        e.preventDefault();
    }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="container_outer">
            <NavbarPage />
            <div className="main">
                <div className="display" style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{display:"flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
                    <input type="hidden" name="MAX_FILE_SIZE" value="1048576" />
                    <input name="file" type="file" onChange={handleFileSelect} style={{marginLeft:"8em"}}/>
                    <button onClick={handleSubmit} className="button_read">Read QR code</button>
                    </div>
                    {/* <div style={{margin: "40px 0px"}}>OR</div> */}
                    <hr style={{margin: "40px"}} width="60%"/>
                    <div style={{display:"flex", flexDirection: "column", alignItems: "center"}} className="serial_input">
                    <input type="text" id="medId" placeholder="Medicine Serial Number" value={medId} onChange={(e) => setMedId(e.target.value)}/>
                    <button onClick={handleButton} className="button_read">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ScanPage;