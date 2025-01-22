"use client"
import Link from 'next/link'
import React from 'react'

function RegisterForm() {
    return (
        <div>
            <div className="authincation">
                <div className="container">
                    <div className="row justify-content-center align-items-center g-0">
                        <div className="col-xl-8">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="welcome-content">
                                        <div className="welcome-title">
                                            <div className="mini-logo">
                                                <Link href="/">
                                                    <p>
                                                        <img src="images/logo-white.png" alt="Ekash Logo" width="30" />
                                                    </p>
                                                </Link>
                                            </div>
                                            <h3>Welcome to Ekash</h3>
                                        </div>
                                        <div className="privacy-social">
                                            <div className="privacy-link">
                                                <Link href="#">
                                                    <p>Have an issue with 2-factor authentication?</p>
                                                </Link>
                                                <br />
                                                <Link href="#">
                                                    <p>Privacy Policy</p>
                                                </Link>
                                            </div>
                                            <div className="intro-social">
                                                <ul>
                                                    <li>
                                                        <Link href="#">
                                                            <p>
                                                                <i className="fi fi-brands-facebook"></i>
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <p>
                                                                <i className="fi fi-brands-twitter-alt"></i>
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <p>
                                                                <i className="fi fi-brands-linkedin"></i>
                                                            </p>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="#">
                                                            <p>
                                                                <i className="fi fi-brands-pinterest"></i>
                                                            </p>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="auth-form">
                                        <h4>Sign Up</h4>
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Full Name</label>
                                                    <input name="fullName" type="text" className="form-control" />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input name="email" type="text" className="form-control" />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input name="password" type="text" className="form-control" />
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check">
                                                        <input
                                                            name="acceptTerms"
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="acceptTerms"
                                                        />
                                                        <label className="form-check-label" htmlFor="acceptTerms">
                                                            I certify that I am 18 years of age or older, and agree to the{' '}
                                                            <Link href="#">
                                                                <p className="text-primary">User Agreement</p>
                                                            </Link>{' '}
                                                            and{' '}
                                                            <Link href="#">
                                                                <p className="text-primary">Privacy Policy</p>
                                                            </Link>
                                                            .
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3 d-grid gap-2">
                                                <button type="submit" className="btn btn-primary me-8 text-white">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </form>
                                        <p className="mt-3 mb-0 undefined">
                                            Already have an account?{' '}
                                            <Link href="/auth/Login">
                                                <p className="text-primary">Sign In</p>
                                            </Link>
                                        </p>
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

export default RegisterForm
