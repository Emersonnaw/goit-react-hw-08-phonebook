import { Link } from './Navigation.styled';
import { selectorLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
export const Navigation = () => {
 const isLoggedIn = useSelector(selectorLoggedIn);
    return (
        <nav>
            <Link to='/'> Home</Link>
            {isLoggedIn &&  <Link to='/contacts'>Contacts</Link>}
        </nav>

    );
}