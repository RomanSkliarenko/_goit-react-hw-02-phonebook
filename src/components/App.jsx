import ContactListMarkup from './ContactListMarkup';
import AddNewContact from './AddNewContact';
import FindContactByName from './FindContactByName';
import { useSelector } from 'react-redux';

const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <AddNewContact />
      <h2>Contacts</h2>
      {contacts && contacts.length > 0 &&
        <FindContactByName />}
      <ul>
        <ContactListMarkup />
      </ul>
    </div>
  );
};

export default App;
