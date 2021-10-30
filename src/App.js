import './App.css';
import { useState, useEffect } from 'react';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const originalContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? originalContacts
    );
  });

  // componentDidMount
  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    } else setContacts(originalContacts);
  }, []);
  //

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createNewContact = data => {
    if (contacts.some(contact => contact.name === data.name)) {
      alert(`Sorry, ${data.name} is already in contacts list`);
      return;
    }
    setContacts(contacts => {
      const newContact = {
        id: uuidv4(),
        ...data,
      };
      return [newContact, ...contacts];
    });
    setName('');
    setNumber('');
  };

  const handleInputChange = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId));
  };

  const getFilteredContacts = (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm onSubmit={createNewContact} />
      <h2>Contacts</h2>
      <Filter onChange={handleInputChange} />
      <ContactList
        contacts={getFilteredContacts(contacts, filter)}
        deleteContact={deleteContact}
      />
    </div>
  );
}
