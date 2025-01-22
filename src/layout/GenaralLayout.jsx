import Link from 'next/link'
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

function GenaralLayout({ children }) {
  return (
    <div id="main-wrapper" className="show">
        <Header />
        <Sidebar />
        <div className="content-body" style={{minHeight: "975px"}}>
            
            {children}
        </div>
        {/* <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="copyright">
                            <p>© Copyright
                                
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
        </div> */}
    </div>
  )
}

export default GenaralLayout
