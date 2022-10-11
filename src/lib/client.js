import marck from "../images/mark.webp";
import nathan from "../images/nathan.webp";
import angela from "../images/angela.webp";
import kim from "../images/kim.webp";
import jacob from "../images/jacob.webp";
import rizky from "../images/rizky.webp";
import anna from "../images/anna.webp";

export const users = [
  {
    id: Math.random(),
    name: "Mark Webber",
    img: marck,
    notification: "reacted to your recent post My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    id: Math.random(),
    name: "Angle Gray",
    img: angela,
    notification: "followed you",
    time: "5m ago",
    read: false,
  },
  {
    id: Math.random(),
    name: "Jacob Thompson",
    img: jacob,
    notification: "has joined your group Chess Club",
    time: "5 days ago",
    read: false,
  },
  {
    id: Math.random(),
    name: "Rizky Hasanuddin",
    img: rizky,
    notification: "sent you a private message ",
    time: "1 week ago",
    content:
      " Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: Math.random(),
    name: "Nathan Peterson",
    img: nathan,
    notification:
      "reacted to your recent post 5 end-game strategies to increase your win rate",
    time: "2 week ago",
    read: false,
  },
  {
    id: Math.random(),
    name: "Kimberly Smith",
    img: kim,
    notification: "commented on your picture",
    time: "1 week ago",
    read: false,
  },
  {
    id: Math.random(),
    name: "Anna Kim",
    img: anna,
    notification: "left the group Chess Club",

    time: "2 week ago",
    read: false,
  },
];
