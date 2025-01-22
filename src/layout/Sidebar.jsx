"use client"
import React from 'react'
// icon
import { FaHome, FaWallet, FaDonate, FaBullseye, FaUser, FaChartBar, FaHeadset, FaLink, FaCog } from 'react-icons/fa';
import { IoIosPersonAdd, IoIosSend } from "react-icons/io";
import { PiUserList } from "react-icons/pi";
import { MdHistory } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';




function Sidebar() {
    const router = useRouter(); // Get the current route

    // Helper function to check if the link is active
    const isActive = (path) => {
        return router.pathname === path ? 'active' : ''; // Compare the current path to the link's path
    };

    return (
        <div className="sidebar">
            <div className="brand-logo">
                <a className="full-logo" href="index.html">
                    <img src="images/logoi.png" alt="" width="30" />
                </a>
            </div>
            <div className="menu active">
                <ul className="show">

                    <li className={isActive('/dashboard')}>
                        <a href="/dashboard">
                            <span className={`icon ${isActive('/dashboard') ? 'active' : ''}`}>
                                {isActive('/dashboard') ? (
                                    <FaHome size={25} color="white" />
                                ) : (
                                    <FaHome size={25} />
                                )}
                            </span>
                            <span className="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li className={isActive('/clientAdd')}>
                        <a href="/clientAdd">
                            <span className={`icon ${isActive('/clientAdd') ? 'active' : ''}`}>
                                {isActive ==='/clientAdd' ? (
                                    <IoIosPersonAdd size={25} color="white" />
                                ) : (
                                    <IoIosPersonAdd size={25} />
                                )}
                            </span>
                            <span className="nav-text">Client Add</span>
                        </a>
                    </li>
                    <li className={isActive('/clientList')}>
                        <a href="/clientList">
                            <span className={`icon ${isActive('/clientList') ? 'active' : ''}`}>
                                {isActive==='/clientList' ? (
                                    <PiUserList size={25} color="white" />
                                ) : (
                                    <PiUserList size={25} />
                                )}
                            </span>
                            <span className="nav-text">Client List</span>
                        </a>
                    </li>
                    <li className={isActive('/history')}>
                        <a href="/history">
                            <span className={`icon ${isActive('/history') ? 'active' : ''}`}>
                                {isActive==='/history' ? (
                                    <MdHistory size={25} color="white" />
                                ) : (
                                    <MdHistory size={25} />
                                )}
                            </span>
                            <span className="nav-text">History</span>
                        </a>
                    </li>
                    <li className={isActive('/receivedMoney')}>
                        <a href="/receivedMoney">
                            <span className={`icon ${isActive('/receivedMoney') ? 'active' : ''}`}>
                                {isActive==='/receivedMoney' ? (
                                    <GiReceiveMoney size={25} color="white" />
                                ) : (
                                    <GiReceiveMoney size={25} />
                                )}
                            </span>
                            <span className="nav-text">Received Money</span>
                        </a>
                    </li>
                    <li className={isActive('/sendMoney')}>
                        <a href="/sendMoney">
                            <span className={`icon ${isActive('/sendMoney') ? 'active' : ''}`}>
                                {isActive==='/sendMoney' ? (
                                    <IoIosSend size={25} color="white" />
                                ) : (
                                    <IoIosSend size={25} />
                                )}
                            </span>
                            <span className="nav-text">Send Money</span>
                        </a>
                    </li>
                    {/* <li>
                    <a href="support.html">
                        <span>
                            <FaHeadset />
                        </span>
                        <span className="nav-text">Support</span>
                    </a>
                </li>
                <li>
                    <a href="affiliates.html">
                        <span>
                            <FaLink />
                        </span>
                        <span className="nav-text">Affiliates</span>
                    </a>
                </li>
                <li>
                    <a href="settings.html">
                        <span>
                            <FaCog />
                        </span>
                        <span className="nav-text">Settings</span>
                    </a>
                </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
