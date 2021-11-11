import { connect } from 'react-redux';
import phonebookActions from '../../redux/Phonebook/phonebook-actions';
import style from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <label>
      Find contacts by name:
      <input
        className={style.input__field}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
}

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
