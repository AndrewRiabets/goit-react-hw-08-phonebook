import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import style from './ContactForm.module.css';
import { addContact } from '../../redux/Phonebook/contacts-operations';
import { v4 as uuidv4 } from 'uuid';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: name,
      number: number,
      id: uuidv4(),
    };
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={style.input__field}
            onChange={handleInputChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          Number
          <input
            className={style.input__field}
            onChange={handleInputChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className={style.form__button}>
          Add contact
        </button>
      </form>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
