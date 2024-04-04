import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomerInput from "../components/CustomerInput";
const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container class1="login-wrapper py-5 home-wrapper-2">

                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Sign Up</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <CustomerInput type="text"
                                    name="name"
                                    placeholder="Name" />
                                <CustomerInput type="email"
                                    name="email"
                                    placeholder="Email" />
                                <CustomerInput type="tel"
                                    name="moblile"
                                    placeholder="Mobile Number" />
                                <CustomerInput className="mt-1" type="password"
                                    name="password"
                                    placeholder="Password" />
                                <div>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0">Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    );
};