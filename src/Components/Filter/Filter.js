import style from './Filter.module.css';

export default function Filter({ filter, onChange }) {
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
