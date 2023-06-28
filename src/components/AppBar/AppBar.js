
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { selectorLoggedIn } from 'redux/auth/selectors';
import {useSelector} from "react-redux"
export const AppBar = () => {
 
  const isLoggin = useSelector(selectorLoggedIn);
  return (
    <Header >
      <Navigation />
      <div>
        {isLoggin ? <UserMenu /> : <AuthNav />}
      </div>
    </Header>
  );
};
