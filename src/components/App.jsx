import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactListMarkup from './contactListMarkup';
import AddNewContact from './addNewContact';
import FindContactByName from './findContactByName';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const inputChangeHandler = (e) =>
    setFilter(e.target.value);

  const submitHandler = ({ name, number }) => {
    const alreadyInContacts = contacts && contacts.find((contact) => contact.name === name);
    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts!`);
      return;
    }
    setContacts([...contacts, { name, id: nanoid(), number }]);
  };

  const deleteContactHandler = (id) =>
    setContacts(contacts.filter((contact) => contact.id !== id));

  useEffect(() => {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('contactList'));
    dataFromLocalStorage && setContacts(dataFromLocalStorage);
  }, []);

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem('contactList', JSON.stringify(contacts));
      return;
    }
    localStorage.removeItem('contactList');
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <AddNewContact onSubmit={submitHandler} />
      <h2>Contacts</h2>
      {contacts.length > 0 &&
        <FindContactByName inputChangeHandler={inputChangeHandler} />}
      <ul>
        <ContactListMarkup contacts={contacts} filter={filter} deleteContactHandler={deleteContactHandler} />
      </ul>
    </div>
  );
};

export default App;
