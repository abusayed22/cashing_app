import React from 'react'

function Header() {
  return (
    <div>
      <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="header-content">
                            <div className="header-left">
                                <div className="brand-logo"><a className="mini-logo" href="index.html"><img src="images/logoi.png" alt="" width="40"/></a></div>
                                <div className="search">
                                    <form action="#">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Here" />
                                            <span className="input-group-text"><i className="fi fi-br-search"></i></span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="dark-light-toggle" > {/* onclick hobe TODO:  */}
                                    <span className="dark"><i className="fi fi-rr-eclipse-alt"></i></span>
                                    <span className="light"><i className="fi fi-rr-eclipse-alt"></i></span>
                                </div>
                                <div className="nav-item dropdown notification">
                                    <div data-bs-toggle="dropdown">
                                        <div className="notify-bell icon-menu">
                                            <span><i className="fi fi-rs-bells"></i></span>
                                        </div>
                                    </div>
                                    <div role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-end">
                                        <h4>Recent Notification</h4>
                                        <div className="lists">
                                            <a className="" href="index-2.html#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success"><i className="fi fi-bs-check"></i></span>
                                                    <div>
                                                        <p>Account created successfully</p>
                                                        <span>2024-11-04 12:00:23</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="" href="index-2.html#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon fail"><i className="fi fi-sr-cross-small"></i></span>
                                                    <div>
                                                        <p>2FA verification failed</p>
                                                        <span>2024-11-04 12:00:23</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="" href="index-2.html#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success"><i className="fi fi-bs-check"></i></span>
                                                    <div>
                                                        <p>Device confirmation completed</p>
                                                        <span>2024-11-04 12:00:23</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="" href="index-2.html#">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon pending"><i className="fi fi-rr-triangle-warning"></i></span>
                                                    <div>
                                                        <p>Phone verification pending</p>
                                                        <span>2024-11-04 12:00:23</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="more">
                                            <a href="notifications.html">More<i className="fi fi-bs-angle-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown profile_log dropdown">
                                    <div data-bs-toggle="dropdown">
                                        <div className="user icon-menu active"><span><i className="fi fi-rr-user"></i></span></div>
                                    </div>
                                    <div  role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu dropdown-menu-end">
                                        <div className="user-email">
                                            <div className="user">
                                                <span className="thumb"><img className="rounded-full" src="images/avatar/3.jpg" alt="" /></span>
                                                <div className="user-info">
                                                    <h5>Hafsa Humaira</h5>
                                                    <span>hello@email.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <a className="dropdown-item" href="profile.html">
                                            <span><i className="fi fi-rr-user"></i></span>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="wallets.html">
                                            <span><i className="fi fi-rr-wallet"></i></span>
                                            Wallets
                                        </a>
                                        <a className="dropdown-item" href="settings.html">
                                            <span><i className="fi fi-rr-settings"></i></span>
                                            Settings
                                        </a>
                                        <a className="dropdown-item logout" href="signin.html">
                                            <span><i className="fi fi-bs-sign-out-alt"></i></span>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
