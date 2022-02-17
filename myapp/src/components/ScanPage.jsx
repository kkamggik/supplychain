import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavbarPage from './NavbarPage';
import BlockchainContext from "./Context";
import axios from 'axios';

function ScanPage() {

    const blockchainContext = useContext(BlockchainContext);
    const { web3, contract, account } = blockchainContext;

    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    async function getMedicine(serial) {
        const med = await contract.methods.getMedicineBySerial(serial).call();
        navigate("/medicine",{ state: { medicine: med }})
    }

    const handleSubmit = (e) => {
        var bodyFormData = new FormData();
        bodyFormData.append("MAX_FILE_SIZE", "1048576");
        bodyFormData.append("file", selectedFile);
        axios({
            method: "post",
            url: "http://api.qrserver.com/v1/read-qr-code/",
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        }).then((result) => {
            const serial = result.data[0].symbol[0].data;
            getMedicine(serial);
        });
        e.preventDefault();
    }

    const handleFileSelect = (e) => {
        setSelectedFile(e.target.files[0])
    }

    return (
        <div className="home_container">
            <div className="home">
                <NavbarPage />
                <div className="item_container">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="MAX_FILE_SIZE" value="1048576" />
                        <input name="file" type="file" onChange={handleFileSelect}/>
                        <div class = "qr_submit">
                            <input type="submit" value="Read QR code"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ScanPage;