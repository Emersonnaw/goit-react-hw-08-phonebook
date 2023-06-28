import { useSelector } from 'react-redux';
import { selectorUser } from 'redux/auth/selectors';

export const UserMenu = () => {
    const userName = useSelector(selectorUser);   
    return (
        <div>
            <p>Welcome, {userName.name}</p>
            <button type="button" > Logout</button>
        </div>
    );

}