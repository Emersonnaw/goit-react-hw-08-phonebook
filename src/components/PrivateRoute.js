import { useSelector } from 'react-redux';
import {  Navigate } from 'react-router-dom';
import { selectorLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({ children}) {
  const isLoggedIn = useSelector(selectorLoggedIn);
  return isLoggedIn ? <> {children} </> : <Navigate to="/login" />;
}
