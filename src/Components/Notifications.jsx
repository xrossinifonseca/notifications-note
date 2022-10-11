import React from "react";
import { useStateContext } from "../context/StateContext";
import "./notifications.css";

const Notifications = ({ notifications }) => {
  const { name, time, notification, img, content, id } = notifications;
  const { readNotifi, read } = useStateContext();

  return (
    <main className="page-notifications">
      <div
        className={"notifications"}
        onClick={() => readNotifi(notifications)}
      >
        <img src={img} alt="perfil-user" />
        <div>
          <div className="info-notification">
            <h5>{name}</h5>
            <p>{notification}</p>
          </div>

          <div className="content-notification">
            <span>{time}</span>
            {content && <p>{content}</p>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notifications;
