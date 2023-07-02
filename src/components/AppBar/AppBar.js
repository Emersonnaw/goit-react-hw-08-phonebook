
import {useSelector} from "react-redux"
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { selectorLoggedIn } from 'redux/auth/selectors';
export const AppBar = () => {
 
  const isLoggedIn = useSelector(selectorLoggedIn);
  return (
    <Header >
      <Navigation />
      <div>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </Header>
  );
};
