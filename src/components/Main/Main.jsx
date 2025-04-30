import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>CarIO</p>
            <img src={assets.user_icon} alt="User icon" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, User</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Your content goes here</p>
                    <img src={assets.compass_icon} alt="Compass icon" />
                </div>
                <div className="card">
                    <p>Your content goes here</p>
                    <img src={assets.bulb_icon} alt="Compass icon" />
                </div>
                <div className="card">
                    <p>Your content goes here</p>
                    <img src={assets.message_icon} alt="Message icon" />
                </div>
                <div className="card">
                    <p>Your content goes here</p>
                    <img src={assets.code_icon} alt="Code icon" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder="Enter a prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
            </div>
            <p className="bottom-info">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    </div>
  );
}

export default Main;