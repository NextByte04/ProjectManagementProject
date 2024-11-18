import React from "react";
import Image from "../../../assets/welcomeImage.svg";
import Logo from "../../../assets/logo.svg";
import "./welcome.css"; 
import { useNavigate } from "react-router-dom";

const WorkManagementPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/continue");
  };

  return (
    <div className="work-management-page">
      <div className="left-section">
        <img src={Logo} alt="Logo" className="logo" />
        <img src={Image} alt="Welcome Illustration" className="center-image" />
      </div>

      <div className="right-section">
        <h1>Welcome to Work<br/><span  style={{color:' #008cff'}}>Management</span> </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          gravida luctus aliquet. Pellentesque sagittis risus nec velit varius,
          quis ultrices ex blandit. Curabitur neque libero, viverra nec massa
          at, efficitur vulputate nulla. Mauris sit amet placerat dui, id
          vulputate quam. Mauris sodales malesuada tempus. Phasellus porttitor
          auctor urna ullamcorper fringilla.    
        </p>
        <button className="buttonNext" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default WorkManagementPage;
