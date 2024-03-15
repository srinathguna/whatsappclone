import React from 'react';

const ContactsInfo = () => {
    return (
    <>
      {show ? (
        <div className="contactinfo-blk">
          <div className="contactinfo-header">
            <i className="icon" onClick={()=>setShow(false)}>
              <MdClear />
            </i>
            <span>Contact info</span>
          </div>
          <div className="contactinfo-container">
            <div className="profiledetails">
              <div className="profileimg">
                <img
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                  alt=""
                />
              </div>
              <span className="name">Gopinath</span>
              <span className="phno">9176610070</span>
            </div>
            <div className="aboutus">
              <span className="title">About</span>
              <span className="desc">Think positive</span>
            </div>
            <div className="medialinks">
              <span className="media-title">
                Media, Links and docs{" "}
                <span>
                  54
                  <i className="icon">
                    <MdOutlineKeyboardArrowRight />
                  </i>
                </span>
              </span>

              <div className="mediathumb-box">
                <div className="mediathumb-card">
                  <img
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    alt=""
                  />
                </div>
                <div className="mediathumb-card">
                  <img
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="profilesetting">
              <div className="settingsingle-card">
                <span>
                  <i className="icon">
                    <MdOutlineStar />
                  </i>
                  Starred messages
                </span>
                <i className="icon">
                  <MdOutlineKeyboardArrowRight />
                </i>
              </div>
              <div className="settingsingle-card">
                <span>
                  <i className="icon">
                    <MdNotifications />
                  </i>
                  Mute notifications
                </span>
                <i className="icon">
                  <MdOutlineKeyboardArrowRight />
                </i>
              </div>
              <div className="settingsingle-card">
                <span>
                  <i className="icon">
                    <MdHistoryToggleOff />
                  </i>
                  Disappearing messages
                </span>
                <i className="icon">
                  <MdOutlineKeyboardArrowRight />
                </i>
              </div>
              <div className="settingsingle-card">
                <span>
                  <i className="icon">
                    <MdLock />
                  </i>
                  Encryption
                </span>
                <i className="icon">
                  <MdOutlineKeyboardArrowRight />
                </i>
              </div>
              <div className="setting-options">
                <i className="icon">
                  <MdBlock />
                </i>
                <span>Block Appa</span>
              </div>
              <div className="setting-options">
                <i className="icon">
                  <MdThumbDown />
                </i>
                <span>Report Appa</span>
              </div>
              <div className="setting-options">
                <i className="icon">
                  <MdDelete />
                </i>
                <span>Delete chat</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
    );
};

export default ContactsInfo;