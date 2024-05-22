import React,{useState} from 'react';
import { MdChat, MdMoreVert, MdRestartAlt, MdExpandMore } from "react-icons/md";
const contactlist = [
  {
    id: 1,
    name: "srinath",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hi",
    messagetime: "7.23",
  },
  {
    id: 2,
    name: "Gopinath",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 3,
    name: "guna",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 4,
    name: "valar",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 5,
    name: "anu",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 6,
    name: "pappu",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 7,
    name: "gugan",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 8,
    name: "kovi",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 9,
    name: "praveen",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
  {
    id: 10,
    name: "uday",
    imagesrc:
      "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    recentmessage: "hello",
    messagetime: "11.23",
  },
];
const Sidebar = () => {
      const [show, setShow] = useState(false);
  const [showchatoptions, setShowchatoptions] = useState(false);
    return (
        <>
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-icon">
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="profilepic"
          />
        </div>
        <div className="action-icons">
          <i className="icon">
            <MdRestartAlt />
          </i>
          <i className="icon">
            <MdChat />
          </i>
          <i className="icon" onClick={() => setShow(!show)}>
            <MdMoreVert />
          </i>
        </div>
        {show && (
          <ul className="profile-setting-dropdown">
            <li>New group</li>
            <li>Archived</li>
            <li>Starred messages</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
      <div className="search">
        <input type="text" placeholder="Search or start new chat" />
      </div>
      <div className="contactlist-cont">
        <ul className="contactlists">
          {contactlist.map((list) => (
            <li className="contactlist-single">
              <div className="profile-icon">
                <img src={list.imagesrc} alt="profile-icon" />
              </div>
              <div className="contact-details">
                <span className="contact-name">{list.name}</span>
                <span className="contact-recent-msg">{list.recentmessage}</span>
              </div>
              <div className="time-drop-options">
                <span className="time">{list.messagetime}</span>
                <i className="icon" onClick={()=> setShowchatoptions(!showchatoptions)}>
                  <MdExpandMore />
                </i>
                {showchatoptions && 
                  <ul className="singlechat-setting-dropdown">
                    <li>Archive chat</li>
                    <li>Mute notifications</li>
                    <li>Delete group</li>
                    <li>Pin chat</li>
                    <li>Mark as unread</li>
                  </ul>
                }
              </div>
            </li>
          ))}

          {/* <li className="contactlist-single">
            <div className="profile-icon">
              <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="profile-icon" />
            </div>
            <div className="contact-details">
              <span className="contact-name">Badminton Group</span>
              <span className="contact-recent-msg">Praveen:today play canceled</span>
            </div>
            <span className="time">
                7:47pm
            </span>
          </li>
          <li className="contactlist-single">
            <div className="profile-icon">
              <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="profile-icon" />
            </div>
            <div className="contact-details">
              <span className="contact-name">Badminton Group</span>
              <span className="contact-recent-msg">Praveen:today play canceled</span>
            </div>
            <span className="time">
                7:47pm
            </span>
          </li> */}
        </ul>
      </div>
    </div> 
        </>
    );
};

export default Sidebar;