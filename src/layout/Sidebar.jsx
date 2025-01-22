import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="brand-logo"><a className="full-logo" href="index.html"><img src="images/logoi.png" alt="" width="30" /></a>
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
        </div>
    )
}

export default Sidebar
