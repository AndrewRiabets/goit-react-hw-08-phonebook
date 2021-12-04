import './App.css';
import { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from './Container/Container';
import { Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import AppBar from './Components/AppBar';
import { authOperations, authSelectors } from './redux/Auth';
import PrivateRoute from './Components/UserMenu/PrivateRoute';
import PublicRoute from './Components/UserMenu/PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/">
                <HomeView />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterView />
              </PublicRoute>
              <PublicRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
