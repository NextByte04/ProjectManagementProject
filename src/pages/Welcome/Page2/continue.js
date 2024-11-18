import React from "react";
import Image from "../../../assets/ContinueImage.svg";
import Logo from "../../../assets/logo.svg";
import "./continue.css";
import { useNavigate } from "react-router-dom";

const ContinuePage = () => {
    const navigate = useNavigate();

    const handelAdmin = () => {
      navigate("/admin");
    };
    return (
        <div className="work-management-page">
            <div className="left-section">
                <img src={Logo} alt="Logo" className="logo" />
                <img src={Image} alt="Welcome Illustration" className="center-image" />
            </div>

            <div className="right-section">
                <h1>Continue as a</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer gravida luctus aliquet. Pellentesque sagittis risus nec velit varius, quis ultrices ex blandit
                </p>
                <div className="button-sections">
                    <button className="buttonEmployee">
                        Employee
                    </button>
                    <button className="buttonNext" onClick={handelAdmin}>
                        Admin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContinuePage;
