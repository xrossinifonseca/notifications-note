import React from "react";
import { useStateContext } from "../context/StateContext";
import "./header.css";
const Header = ({ header }) => {
  const { read, allRead } = useStateContext();

  const qty = header.length - read.length;

  return (
    <header className="header-notifi">
      <div className="text-header">
        <h3>Notifications</h3>
        <span>{qty}</span>
      </div>

      <p onClick={() => allRead(header)}>Mark all as read</p>
    </header>
  );
};

export default Header;
