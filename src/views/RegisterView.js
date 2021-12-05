import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container col-xl-5 py-5">
      <div className="row align-items-center py-5">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="p-md-5 border bg-light"
        >
          <h1 className="h3 mb-3 fw-normal">Зарегистрироваться</h1>
          <div className="form-floating mb-3">
            <input
              id="floatingName"
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Barack Obama"
            />
            <label for="floatingName">Имя</label>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingInput"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="barackobama@mail.com"
            />
            <label>Почта</label>
          </div>

          <div className="form-floating mb-3">
            <input
              className="form-control"
              id="floatingPassword"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Пароль"
            />
            <label for="floatingPassword">Пароль</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
