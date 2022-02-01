import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const renderContactList = props.contacts.map((contact) => {
    const removeContactHandler = (id) => {
      props.removeContactHandler(id);
    };
    return <ContactCard contact={contact} removeContactHandler={removeContactHandler} key={contact.id} />;
  });
  return (
    <>
      <div>
        <h2 style={{ marginTop: "20px" }}>Contact List</h2>
        <Link to={`/contact/create`} className="ui button blue right">
          Add Contact
        </Link>
      </div>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
};

export default ContactList;
