import React,{useState} from 'react';
import {
  MdSearch,
  MdMoreVert,
  MdOutlineEmojiEmotions,
  MdAttachFile,
  MdOutlineMic,
} from "react-icons/md";
// import ftimage from "./../../images/poster.jpeg"; // with import
// import ftvideo from "./../../images/video.mp4"; // with import

const chat = () => {
    const [usershow, usersetShow] = useState(false);
    return (
        <>
                  <div className="chat">
        <div className="chat-header">
          <div className="profile-icon" onClick={() => {setShow(true);
            }}>
            <img
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              alt="profilepic"
            />
          </div>
          <div className="contact-details">
            <span className="contact-name">Badminton Group</span>
            <span className="contact-lastseen">
              last seen today at 10:16 pm
            </span>
          </div>
          <div className="chat-actions-icons">
            <i className="icon">
              <MdSearch />
            </i>
            <i className="icon" onClick={() => usersetShow(!usershow)}>
              <MdMoreVert />
            </i>
          </div>
          {usershow && (
            <ul className="receiver-setting-dropdown">
              <li>Contact info</li>
              <li>Select messages</li>
              <li>Close chat</li>
              <li>Mute notifications</li>
              <li>Disappearing messages</li>
              <li>Clear messages</li>
              <li>Delete chat</li>
            </ul>
          )}
        </div>
        <div className="chat-place">
          <div className="chat-cont">
            <div className="left-chat">
              <span className="text-box">
                <span className="texts">
                  Now, you will learn to display images by placing them inside
                  the src folder Now, you will learn to display images by
                  placing them inside the src folder
                </span>
                <span className="time">7.20pm</span>
              </span>
            </div>
            <div className="left-chat">
              <span className="text-box">
                <span className="texts">hi welcome hello</span>
                <span className="time">7.20pm</span>
              </span>
            </div>
            <div className="left-chat">
              <span className="image-box">
                <img
                  src="https://scontent.fblr17-1.fna.fbcdn.net/v/t1.6435-9/158056481_3849561338412232_8395680419178111175_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=vHPj4VuGbqsAX9b82P3&_nc_ht=scontent.fblr17-1.fna&oh=00_AT9CevBsPvmAmI3xkhMUduJ_uNVyIDXm3STFlnY0Qzf1MQ&oe=63598EC1"
                  alt=""
                />
              </span>
            </div>
            <div className="left-chat">
              <span className="image-box">
                <img
                  src="https://www.ujjivansfb.in/assets/web_images/748/original/189_22_Platina_FD_-__Home_Page_Mobile_Banner_600_x_865_px.jpg"
                  alt=""
                />
              </span>
            </div>

            <div className="right-chat">
              <span className="text-box">hi welcome hello</span>
            </div>
            <div className="right-chat">
              <span className="image-box">
                <img
                  src="https://www.ujjivansfb.in/assets/web_images/748/original/189_22_Platina_FD_-__Home_Page_Mobile_Banner_600_x_865_px.jpg"
                  alt=""
                />
              </span>
            </div>
            <div className="right-chat">
              <span className="image-box">
                {/* <img src={ftimage} alt="" /> */}
              </span>
            </div>
            <div className="right-chat">
              <span className="video-box">
                {/* <video src={ftvideo} type="video/mp4" /> */}
              </span>
            </div>
          </div>
        </div>
        <div className="chat-options">
          <i className="icon">
            <MdOutlineEmojiEmotions />
          </i>
          <i className="icon attach">
            <MdAttachFile />
          </i>
          <div className="message-input">
            <input type="text" placeholder="Type a message" />
          </div>
          <i className="icon">
            <MdOutlineMic />
          </i>
        </div>
      </div>
        </>
    );
};

export default chat;