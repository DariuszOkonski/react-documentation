import React from "react";
import UserInfo from "./UserInfo";

const formatDate = (date) => {};

export default function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />

      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
