import { connect } from 'react-redux';
import { changeFilter } from '../../redux/Phonebook/phonebook-actions';
import style from './Filter.module.css';

function Filter({ filter, changeFilter }) {
  return (
    <label>
      Find contacts by name:
      <input
        className={style.input__field}
        type="text"
        name="filter"
        value={filter}
        onChange={e => changeFilter(e.currentTarget.value)}
      />
    </label>
  );
}

const mapStateToProps = ({ contacts: { filter } }) => ({ filter: filter });

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
