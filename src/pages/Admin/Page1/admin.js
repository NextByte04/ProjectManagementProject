import React from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import Image from "../../../assets/adminPic.svg";
import Logo from "../../../assets/logo.svg";
const App = () => {
    const navigate=useNavigate();

    const handelNext=()=>{
        navigate('/admin-next')
    }
    return (
        <div className="work-management-page">
            <div className="left-section">
                <img src={Logo} alt="Logo" className="logo" />
                <img src={Image} alt="Welcome Illustration" className="center-image" />
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">
                <div className="w-75 mx-auto">
                    <h1>
                        Log In as <span className="text-primary">Admin</span>
                    </h1>
                    <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida luctus aliquet.
                    </p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="nextbyte.pk1"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="********"
                            />
                        </div>
                        <div className="mb-3 text-end">
                            <a href="/forgot-password" className="anckerTag text-primary">
                                Forget Password
                            </a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100" onClick={handelNext}>
                            Next
                        </button>
                    </form>
                    <div className="mt-4 text-center">
                        <p>
                            I didn't have an Account!{' '}
                            <a href="/register" className="text-primary">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
