import React from 'react';

const ContactListMarkup = ({ contacts, deleteContactHandler, filter, filteredContacts = false }) => {
  const filteredContactsArr = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      {
        filteredContacts ?
          filteredContactsArr.map(({ name, id, number }) =>
            <li key={id}>{name}
              <b>:</b> {number}
              <button onClick={() => deleteContactHandler(id)}>Delete</button>
            </li>)
          :
          contacts.map(({ name, id, number }) => <li key={id}>{name} <b>:</b> {number}
            <button onClick={() => deleteContactHandler(id)}>Delete</button>
          </li>)
      }
    </>
  );
};
export default ContactListMarkup;

