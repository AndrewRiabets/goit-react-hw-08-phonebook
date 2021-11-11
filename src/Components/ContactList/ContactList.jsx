import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/Phonebook/phonebook-actions';

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  console.log(deleteContact);
  return (
    <ul className={style.contacts__list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contacts__item}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={style.contacts__btn}
            type="button"
            onClick={() => deleteContact(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const getFilteredContacts = (allContacts, filter) => {
  return allContacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
