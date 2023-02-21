import ContactListMarkup from './ContactListMarkup';
import AddNewContact from './AddNewContact';
import FindContactByName from './FindContactByName';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations/contacts';
import { useEffect } from 'react';
import Notiflix from 'notiflix';


const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);
  const dispatch = useDispatch();

  error && Notiflix.Notify.warning(`${error}`);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);


  return (
    <div>
      {loading && <div className='loader'/>}
      <h1>Phonebook</h1>
      <AddNewContact />
      <h2>Contacts</h2>
      {contacts.length > 0 &&
        <FindContactByName />}
      <ul>
        <ContactListMarkup />
      </ul>
    </div>
  );
};

export default App;
