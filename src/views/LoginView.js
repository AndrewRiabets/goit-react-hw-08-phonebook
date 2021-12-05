import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/Auth';
import { BsFillKeyFill } from 'react-icons/bs';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    // <div>
    //   <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

    //   <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
    //     <label style={styles.label}>
    //       Почта
    //       <input
    //         placeholder="name@example.com"
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <label style={styles.label}>
    //       Пароль
    //       <input
    //         placeholder="Password"
    //         className="form-floating"
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <button type="submit">
    //       <BsFillKeyFill />
    //       Войти
    //     </button>
    //   </form>
    // </div>

    <div className="container col-xl-5 py-5">
      <div className="row align-items-center py-5">
        <form
          className="p-md-5 border bg-light"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h1 className="h3 mb-3 fw-normal">Введите логин и пароль</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="floatingInput"
              value={email}
              onChange={handleChange}
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              id="floatingPassword"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Пароль</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
