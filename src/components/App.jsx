import { Routes,Route } from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy } from "react";
import { fetchCurrentUser } from "redux/auth/operations";
import RestrictedRoute from './RestrictedRoute';
import SharedLayout from "./SharedLayout";
import PrivateRoute from "./PrivateRoute";
import { selectorisRefreshing} from "redux/auth/selectors";
  const Home = lazy(() => import('Pages/Home/Home'));
  const Contacts = lazy(() => import("Pages/Contacts/Contacts"));
  const Register = lazy(() => import('Pages/Register/Register'));
  const Login = lazy(() => import("Pages/Login/Login"));

export const App = () => {
  const dispatch = useDispatch();
   const isRefresh = useSelector(selectorisRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch]);


  return isRefresh ? (<h3>resresh</h3>):(
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path='/register' element={
            <RestrictedRoute redirectTo="/contacts" component={ Register} />
          }
          />

          <Route path='/login' element={
            <RestrictedRoute redirectTo="/contacts" component={ Login} />
          }
          />

          <Route path='/contacts' element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
          />
          
        </Route >
        <Route path="*" element={<Home/>}/>
      </Routes>
      <ToastContainer/>
    </div>
  );
};
