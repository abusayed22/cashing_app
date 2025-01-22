"use client"
import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
// import Link from 'next/link';

function LoginForm() {
    return (
        <>
            {/* <Head>
                <title>Sign In | Ekash</title>
                <link rel="icon" href="/favicon.ico" />
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            </Head> */}

            <div className="dashboard">
                {/* <div id="preloader" className="preloader-wrapper">
                    <div className="loader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div> */}

                <div className="authincation">
                    <div className="container">
                        <div className="row justify-content-center align-items-center g-0">
                            <div className="col-xl-8">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="welcome-content">
                                            <div className="welcome-title">
                                                <div className="mini-logo">
                                                    {/* <Link href="/">
                            <a>
                              <img src="/images/logo-white.png" alt="Ekash Logo" width="30" />
                            </a>
                          </Link> */}
                                                </div>
                                                <h3>Welcome to Ekash</h3>
                                            </div>
                                            <div className="privacy-social">
                                                <div className="privacy-link">
                                                    <Link href={'/'}><div>Have an issue with 2-factor authentication?</div></Link><br />
                                                    <Link href={"/"}><div>Privacy Policy</div></Link>
                                                </div>
                                                <div className="intro-social">
                                                    <ul>
                                                        <li><div><i className="fi fi-brands-facebook"></i></div></li>
                                                        <li><div><i className="fi fi-brands-twitter-alt"></i></div></li>
                                                        <li><div><i className="fi fi-brands-linkedin"></i></div></li>
                                                        <li><div><i className="fi fi-brands-pinterest"></i></div></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="auth-form">
                                            <h4>Sign In</h4>
                                            <form action="https://ekash.vercel.app/otp-phone.html">
                                                <div className="row">
                                                    <div className="col-12 mb-3">
                                                        <label className="form-label">Email</label>
                                                        <input name="email" type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-12 mb-3">
                                                        <label className="form-label">Password</label>
                                                        <input name="password" type="text" className="form-control" />
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="form-check">
                                                            <input name="acceptTerms" id="acceptTerms" type="checkbox" className="form-check-input" />
                                                            <label className="form-check-label" htmlFor="acceptTerms">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 text-end">
                                                        <Link href={"/reset"}><div>Forgot Password?</div></Link>
                                                    </div>
                                                </div>
                                                <div className="mt-3 d-grid gap-2">
                                                    <button type="submit" className="btn btn-primary me-8 text-white">Sign In</button>
                                                </div>
                                            </form>
                                            <p className="mt-3 mb-0 undefined">
                                                Don't have an account?
                                                <Link href={"/auth/register"}><div className="text-primary"> Sign up</div></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm
