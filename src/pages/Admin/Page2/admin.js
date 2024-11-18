import React, { useState } from "react";
import "./admin.css";
import Logo from '../../../assets/logo.svg'
import Image from '../../../assets/createAccountAdmin.svg'
const App = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 bg-primary d-flex flex-column justify-content-center align-items-center text-white">
                    <div>
                        <img
                            src={Logo}
                            alt="Your Logo"
                            className="mb-4"
                        />
                    </div>
                    <div className="text-center">
                        <img
                            src={Image}
                            alt="Illustration"
                            className="img-fluid mb-4"
                            style={{ maxWidth: "300px" }}
                        />
                        <h4>Welcome to Admin Portal</h4>
                        <p>Follow the steps to create your account.</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="w-75 mx-auto">
                        <h3>
                            {step === 1 && "Create new account as "}
                            {step === 2 && "Company Details "}
                            {step === 3 && "Account Confirmation "}
                            <span className="text-primary">Admin</span>
                        </h3>
                        <p className="text-muted">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida luctus aliquet.
                        </p>

                        {/* Progress Indicators */}
                        <div className="mb-4">
                            <div className="d-flex justify-content-center align-items-center">
                                {[1, 2, 3].map((s) => (
                                    <div key={s} className="d-flex align-items-center">
                                        <div
                                            className={`circle ${step === s ? "active" : ""}`}
                                            style={{
                                                backgroundColor: step === s ? "#007bff" : "#e9ecef",
                                                borderRadius: "50%",
                                                width: "30px",
                                                height: "30px",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: step === s ? "#fff" : "#000",
                                            }}
                                        >
                                            {s}
                                        </div>
                                        {s < 3 && (
                                            <div
                                                className="line"
                                                style={{
                                                    width: "50px",
                                                    height: "2px",
                                                    backgroundColor: step >= s + 1 ? "#007bff" : "#e9ecef",
                                                    margin: "0 10px",
                                                }}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step Content */}
                        {step === 1 && (
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Company Name*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email Address*</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Phone Number*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Industry*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Company Size*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Country*</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <div>
                                <h5>Step 2 Content</h5>
                                <p>Add more details about your company.</p>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h5>Confirmation</h5>
                                <p>Review and confirm your information.</p>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="d-flex justify-content-between mt-4">
                            {step > 1 && (
                                <button className="btn btn-secondary" onClick={prevStep}>
                                    Back
                                </button>
                            )}
                            <button className="btn btn-primary" onClick={nextStep}>
                                {step === 3 ? "Submit" : "Next"}
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p>
                            I already have an account!{" "}
                            <a href="/login" className="text-primary">
                                Log In
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
