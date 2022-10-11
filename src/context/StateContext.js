import React, { createContext, useContext, useState } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [read, setRead] = useState([]);
  // const [color, setColor] = useState("notifications");

  const readNotifi = (onread) => {
    const cheackRead = read.find((item) => item.id === onread.id);

    if (cheackRead) {
      const uptadeRead = read.map((cheak) => {
        if (cheak.id === onread.id) {
          return { ...cheak };
        }
      });

      setRead(uptadeRead);
    } else {
      setRead([...read, { ...onread }]);
    }
  };

  const allRead = (allread) => {
    const cheackAll = read.find((item) => item === allread);
    if (cheackAll) {
      const uptadeAll = read.map((i) => {
        if (i === allread) {
          return { i };
        }
      });
      setRead(uptadeAll);
    } else {
      setRead([...allread]);
    }
  };

  return (
    <Context.Provider value={{ read, setRead, readNotifi, allRead }}>
      {children}
    </Context.Provider>
  );
};
export const useStateContext = () => useContext(Context);
