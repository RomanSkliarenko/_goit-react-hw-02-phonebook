import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactListMarkup from './contactListMarkup';
import AddNewContact from './addNewContact';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

  submitHandler = (state) => {
    const alreadyInContacts = this.state.contacts.find((contact) => contact.name === state.name);
    if (alreadyInContacts) {
      alert(`${alreadyInContacts.name} is already in contacts!`);
      return;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, { name:state.name, id: nanoid(), number: state.number }],
      };
    });
  };

  deleteContactHandler = (id) => {
    this.setState({ ...this.state, contacts: this.state.contacts.filter((contact) => contact.id !== id) });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <AddNewContact onSubmit={this.submitHandler}/>
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && <><span>Find contact by name </span>
          <input
            name='filter'
            type='text'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.inputChangeHandler}
          />
        </>
        }
        <ul>
          {
            this.state.contacts.length > 0 && this.state.filter === '' ?
              <ContactListMarkup contacts={this.state.contacts} deleteContactHandler={this.deleteContactHandler}
                                 filter={this.state.filter} />
              :
              <ContactListMarkup contacts={this.state.contacts} deleteContactHandler={this.deleteContactHandler}
                                 filter={this.state.filter} filteredContacts={true} />
          }
        </ul>
      </div>
    );
  }
}

export default App;
