import style from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul className={style.contacts__list}>
      {contacts.map(({id, name, number,}) =>
        <li key={id} className={style.contacts__item}>
          <p>{name}</p>
          <p>{number}</p>
          <button  className={style.contacts__btn} type='button' onClick={() => deleteContact(id)}>Delete contact</button>
        </li>)}
    </ul>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
