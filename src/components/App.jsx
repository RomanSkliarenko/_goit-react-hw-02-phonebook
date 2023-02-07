import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactListMarkup from './contactListMarkup';
import AddNewContact from './addNewContact';
import FindContactByName from './findContactByName';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  inputChangeHandler = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  submitHandler = ({ name, number }) => {
    const alreadyInContacts = this.state.contacts && this.state.contacts.find((contact) => contact.name === name);
    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts!`);
      return;
    }
    if (alreadyInContacts === null) {
      this.setState((prevState) => {
        const updatedContacts = [{ name: name, id: nanoid(), number: number }];
        localStorage.setItem('contactList', JSON.stringify(updatedContacts));
        return {
          ...prevState,
          contacts: [updatedContacts],
        };
      });
      return;
    }
    this.setState((prevState) => {
      const updatedContacts = [...prevState.contacts, { name: name, id: nanoid(), number: number }];
      localStorage.setItem('contactList', JSON.stringify(updatedContacts));
      return {
        ...prevState,
        contacts: [...prevState.contacts, { name: name, id: nanoid(), number: number }],
      };
    });
  };

  deleteContactHandler = (id) => {
    this.setState((_) => {
      const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
      localStorage.setItem('contactList', JSON.stringify(updatedContacts));
      return { ...this.state, contacts: updatedContacts };
    });
  };

  componentDidMount() {
    const dataFromLocalStorage =  JSON.parse(localStorage.getItem('contactList'))
    dataFromLocalStorage && this.setState({ ...this.state, contacts:dataFromLocalStorage });
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddNewContact onSubmit={this.submitHandler} />
        <h2>Contacts</h2>
        {this.state.contacts && this.state.contacts.length > 0 &&
          <FindContactByName inputChangeHandler={this.inputChangeHandler} />}
        <ul>
          <ContactListMarkup {...this.state} deleteContactHandler={this.deleteContactHandler} />
        </ul>
      </div>
    );
  }
}

export default App;
