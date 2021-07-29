import React, { useState } from "react";
import AddPersonForm from "./addPersonForm";
import PeopleList from "./peopleList";

const ContactManager = (props) => {
  //const contacts = ["Sesugh Hulugh", "Paul Bija"];

  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </>
  );
};

export default ContactManager;
