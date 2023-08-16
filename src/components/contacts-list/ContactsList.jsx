import React from "react";
import styles from "./ContactsList.module.css";
import Contact from "./contact/Contact";
import { useSelector } from "react-redux";

const ContactsList = () => {
  const { contacts } = useSelector((state) => state.contactsSlice);
  const { filter } = useSelector((state) => state.filterSlice);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))
      ) : (
        <p>No contacts found...</p>
      )}
    </ul>
  );
};

export default ContactsList;
