import ContactForm from '../Components/ContactForm/ContactForm';
import ContactList from '../Components/ContactList/ContactList';
import Filter from '../Components/Filter/Filter';

export default function ContactsView() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
