import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  //destructing from props
  const { id, name, email } = props.contact;
  return (
    <>
      <div className="item" style={{ padding: "10px 0px" }}>
        <img className="ui avatar image" src={user} alt="" />
        <div className="content">
          <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
            <div className="header">{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", float: "right", marginTop: "7px", cursor: "pointer" }}
          onClick={() => {
            if (window.confirm("Apakah anda yakin menghapus data ini?")) props.removeContactHandler(id);
          }}
        ></i>
      </div>
    </>
  );
};

export default ContactCard;
