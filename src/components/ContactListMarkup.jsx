import { deleteContact } from '../redux/contact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const ContactListMarkup = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContactsArr = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  const dispatch = useDispatch();
  const deleteContactHandler = (id) => dispatch(deleteContact(id));
  return (
    <>
      {
        filteredContactsArr.map(({ name, id, number }) =>
          <li key={nanoid()}>{name}
            <b>:</b> {number}
            <button onClick={() => deleteContactHandler(id)}>Delete</button>
          </li>)
      }
    </>
  );
};
export default ContactListMarkup;
