import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from './Container/Container';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import AppBar from './Components/AppBar';
import { authOperations } from './redux/Auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}
