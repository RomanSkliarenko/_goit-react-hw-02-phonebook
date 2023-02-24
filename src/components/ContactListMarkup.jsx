import { deleteContact } from '../redux/operations/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const ContactListMarkup = () => {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContactHandler = async (id) => {
    await dispatch(deleteContact(id));
  };
  return (
    <>
      {
        filteredContacts.map(({ name, id, number }) =>
          <li className='contactItem' key={nanoid()}>
            <div className='contactInfo'><span>{name}</span><span>{number}</span></div>
            <button className='deleteButton' disabled={loading} onClick={() => deleteContactHandler(id)}></button>
          </li>)
      }
    </>
  );
};
export default ContactListMarkup;
