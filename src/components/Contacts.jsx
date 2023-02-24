import React from 'react';
import { useSelector } from 'react-redux';
import AddNewContact from './AddNewContact';
import FindContactByName from './FindContactByName';
import ContactListMarkup from './ContactListMarkup';
import Notiflix from 'notiflix';

function Contacts() {
  const { contacts, loading, error } = useSelector(state => state.contacts);
  error && Notiflix.Notify.warning(`${error}`);

  return (
    <div className='contactsWrapper'>
      {loading && <div className='loader' />}
      <AddNewContact />
      <h2 className='contactListTitle'>Contacts</h2>
      {contacts.length > 0 &&
        <FindContactByName />}
      <ul>
        <ContactListMarkup />
      </ul>
    </div>
  );
}

export default Contacts;
