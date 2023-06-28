import { Routes,Route } from "react-router-dom";
import Home from "Pages/Home";
import SharedLayout from "./SharedLayout";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import { LoginForm } from "./LoginForm/LoginForm";
import { selectorUser } from "redux/auth/selectors";
import { useSelector } from 'react-redux';
export const App = () => {
  const state = useSelector(selectorUser);
console.log(state)
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/login' element={<LoginForm />} />
        </Route >
        
        <Route path="*" element={<Home />}/>
      </Routes>
     
    </div>
  );
};
