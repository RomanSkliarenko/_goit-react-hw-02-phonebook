import React, { Component } from 'react';

class AddNewContact extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChangeHandler = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>Name
          <input
            onChange={this.inputChangeHandler}
            type='text'
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>Number
          <input
            onChange={this.inputChangeHandler}
            type='tel'
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}

export default AddNewContact;
