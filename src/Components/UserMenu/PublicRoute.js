import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from '../../redux/Auth';

export default function PublicRoute({
  children,
  restricted = false,
  ...routerProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routerProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
}
