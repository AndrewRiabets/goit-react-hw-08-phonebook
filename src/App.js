import './App.css';
import Container from './Container/Container';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
import AppBar from './Components/AppBar';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        {/* <Route path="/contacts" component={ContactsView} /> */}
      </Switch>
    </Container>
  );
}
