import React, { useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Contactinfo from "./components/ContactsInfo";

const App = () => {
   const [show, setShow] = useState(false);
  return (
    <div className="wrapper">
      <div className="container flex">
        <Sidebar />
        <Chat show={show} setShow={setShow} />
        {show ? <Contactinfo show={show} setShow={setShow} /> : null}
      </div>
    </div>
  );
};

export default App;