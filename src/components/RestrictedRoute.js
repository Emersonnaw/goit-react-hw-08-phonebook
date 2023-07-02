import { selectorLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function RestrictedRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectorLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
}
