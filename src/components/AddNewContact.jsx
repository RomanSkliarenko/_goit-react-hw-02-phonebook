import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contact/contactSlice';

const AddNewContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const submitHandler = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

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
    submitHandler({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={formSubmit}>
      <label>Name
        <input
          onChange={inputChangeHandler}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
        />
      </label>
      <label>Number
        <input
          onChange={inputChangeHandler}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          value={number}
          required
        />
      </label>
      <button type='submit'>Add contact</button>
    </form>
  );
};


export default AddNewContact;
