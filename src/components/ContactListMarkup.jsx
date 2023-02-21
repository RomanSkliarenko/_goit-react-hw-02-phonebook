import { deleteContact } from '../redux/operations/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const ContactListMarkup = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const loading = useSelector(state => state.contacts.loading);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContactHandler = async (id) => {
    await dispatch(deleteContact(id));
  };
  return (
    <>
      {
        filteredContacts.map(({ name, id, number }) =>
          <li key={nanoid()}>{name}
            <b>:</b> {number}
            <button disabled={loading ? true : false} onClick={() => deleteContactHandler(id)}>Delete</button>
          </li>)
      }
    </>
  );
};
export default ContactListMarkup;
