import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteContact,
  fetchContacts,
} from '../../redux/Phonebook/contacts-operations';
import LoaderSpin from '../../Loader/Loader';
import { getLoading } from '../../redux/selectors';

const ContactList = ({ contacts, deleteContact, fetchContactsAll }) => {
  const isLoading = useSelector(getLoading);
  useEffect(() => {
    fetchContactsAll();
  }, []);

  return (
    <>
      {isLoading && <LoaderSpin />}
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
    </>
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
  deleteContact: id => dispatch(deleteContact(id)),
  fetchContactsAll: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
