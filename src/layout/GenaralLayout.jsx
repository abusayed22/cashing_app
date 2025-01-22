import Link from 'next/link'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function GenaralLayout({ children }) {
  return (
    <div id="main-wrapper" className="show">
        <Header />
        {/* <div className="sidebar">
            <div className="brand-logo"><a className="full-logo" href="index.html"><img src="images/logoi.png" alt="" width="30"/></a>
            </div>
            <div className="menu active">
                <ul className="show">
                    <li className="active">
                        <a href="index.html" className="active">
                            <span>
                                <i className="fi fi-rr-dashboard"></i>
                            </span>
                            <span className="nav-text">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="wallets.html">
                            <span>
                                <i className="fi fi-rr-wallet"></i>
                            </span>
                            <span className="nav-text">Wallets</span>
                        </a>
                    </li>
                    <li>
                        <a href="budgets.html">
                            <span>
                                <i className="fi fi-rr-donate"></i>
                            </span>
                            <span className="nav-text">Budgets</span>
                        </a>
                    </li>
                    <li>
                        <a href="goals.html">
                            <span>
                                <i className="fi fi-sr-bullseye-arrow"></i>
                            </span>
                            <span className="nav-text">Goals</span>
                        </a>
                    </li>
                    <li>
                        <a href="profile.html">
                            <span>
                                <i className="fi fi-rr-user"></i>
                            </span>
                            <span className="nav-text">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="analytics.html">
                            <span>
                                <i className="fi fi-rr-chart-histogram"></i>
                            </span>
                            <span className="nav-text">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="support.html">
                            <span>
                                <i className="fi fi-rr-user-headset"></i>
                            </span>
                            <span className="nav-text">Support</span>
                        </a>
                    </li>
                    <li>
                        <a href="affiliates.html">
                            <span>
                                <i className="fi fi-rs-link-alt"></i>
                            </span>
                            <span className="nav-text">Affiliates</span>
                        </a>
                    </li>
                    <li>
                        <a href="settings.html">
                            <span>
                                <i className="fi fi-rs-settings"></i>
                            </span>
                            <span className="nav-text">Settings</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div> */}
        <Sidebar />
        <div className="content-body" style={{minHeight: "975px"}}>
            
            {children}
        </div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="copyright">
                            <p>© Copyright
                                <script>
                                    var CurrentYear = new Date().getFullYear()
                                    document.write(CurrentYear)
                                </script>2025
                                <a href="#">Ekash</a> I All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="footer-social">
                            <ul>
                                <li><a href="#"><i className="fi fi-brands-facebook"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-twitter"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-linkedin"></i></a></li>
                                <li><a href="#"><i className="fi fi-brands-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GenaralLayout
