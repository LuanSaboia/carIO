import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const [extend, setExtend] = useState(true);

  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={() => setExtend(prev=>!prev)} src={assets.menu_icon} alt="Menu" className="menu" />
        <div className="new-chat">
          <img
            src={assets.plus_icon}
            alt="New Chat"
            className="new-chat-icon"
          />
          {extend ? <p>New Chat</p> : null}
        </div>
        {extend ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="Recent Entry" />
              <p>What is react ...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extend ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extend ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extend ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
