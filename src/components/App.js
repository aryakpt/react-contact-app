import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContacts);
  };

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Router>
        <header>
          <Header />
        </header>
        <main className="ui container">
          <Switch>
            <Route exact path={`/`} render={(props) => <ContactList {...props} contacts={contacts} removeContactHandler={removeContactHandler} />} />
            <Route exact path={`/contact/create`} render={(props) => <AddContact {...props} addContactHandler={addContactHandler} />} />
            <Route exact path={`/contact/:id`} component={ContactDetail} />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
