import { Link } from 'react-router-dom';
import { AiOutlineMedicineBox, AiOutlineUser } from "react-icons/ai";
import {FiSettings, FiLogOut} from "react-icons/fi";
import {MdOutlineLocalShipping, MdOutlineQrCodeScanner} from 'react-icons/md';
import {BsHouseDoor} from 'react-icons/bs';
import { React, useState, useEffect} from "react";



function NavbarPage() {
    const current_user = JSON.parse(window.localStorage.getItem("user")).identity;
    useEffect(() => {
        const list = document.querySelectorAll('.custom_nav li');
        function activeLink() {
            list.forEach((item) => {
                item.classList.remove('hovered');
            })
            this.classList.add('hovered');
        }
        list.forEach((item) => {
            item.addEventListener('mouseover', activeLink);
        })
        return () => {
            list.forEach((item) => {
                item.removeEventListener('mouseover', activeLink);
            })
        }
    })
    return(
        <div className="custom_nav">
            <ul>
                <li>
                    <Link to="/"><span className="icon"><AiOutlineMedicineBox/></span><span className="title">Medicine Tracker</span></Link>
                </li>
                <li>
                    <Link to="/"><span className="icon"><BsHouseDoor/></span><span className="title">Dashboard</span></Link>
                </li>
                <li>
                    <Link to="/scan"><span className="icon"><MdOutlineQrCodeScanner/></span><span className="title">Scan</span></Link>
                </li>
                { current_user!=="1" ?
                <li>
                    <Link to="/transit"><span className="icon"><MdOutlineLocalShipping/></span><span className="title">In Transit</span></Link>
                </li> : ""
                }
                { current_user!=="1" ?
                <li>
                    <Link to="/settings"><span className="icon"><FiSettings/></span><span className="title">Settings</span></Link>
                </li>: ""
                }
                { current_user==="1" ?
                <li>
                    <Link to="/users"><span className="icon"><AiOutlineUser/></span><span className="title">Users</span></Link>
                </li> : "" }        
                <li>
                    <Link to="/login"><span className="icon"><FiLogOut/></span><span className="title">Sign Out</span></Link>
                </li>
            </ul>
        </div>
    );
}
export default NavbarPage;