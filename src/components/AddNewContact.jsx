import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/operations/contacts';


const AddNewContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { loading } = useSelector((state) => state.contacts);

  const inputChangeHandler = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSubmit} className='addContactForm'>
      <h2 className='contactTitle'>CREATE NEW DUDE CONTACT</h2>
      <input
        className='addContactInput'
        onChange={inputChangeHandler}
        type='text'
        name='name'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        required
        placeholder='Dude name'
      />
      <input
        className='addContactInput'
        onChange={inputChangeHandler}
        type='tel'
        name='number'
        pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
        title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
        value={number}
        required
        placeholder='Dude number'
      />
      <button className='button' disabled={loading} type='submit'>Create</button>
    </form>
  );
};


export default AddNewContact;
