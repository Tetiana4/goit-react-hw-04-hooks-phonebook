import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import { Container, Title } from './App.styled';
import { useCallback } from 'react';

export default function App() {
  const contactsArr = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [filter, setFilter] = useState('');

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contactsArr;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };
    setContacts(s => [...contacts, contact]);
  };

  const getVisibleList = useCallback(() => {
    const normalisedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalisedFilter),
    );
  }, [filter, contacts]);

  const deleteContacts = contactId => {
    setContacts(s => s.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm propSubmit={addContact} />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <Filter value={filter} onChange={setFilter} />
      <ContactList contacts={getVisibleList()} onDelete={deleteContacts} />
    </Container>
  );
}
