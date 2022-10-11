import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Notifications from "./Components/Notifications";
import { useStateContext } from "./context/StateContext";

import { users } from "./lib/client";

function App() {
  const { read } = useStateContext();

  return (
    <div className="container">
      <div className="screen-notifi">
        <Header header={users} />

        {users?.map((item) => (
          <Notifications key={item.id} notifications={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
