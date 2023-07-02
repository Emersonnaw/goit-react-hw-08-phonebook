import { useSelector, useDispatch } from 'react-redux';
import { selectorUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import {Wrap, P, Button} from './UserMenu.styled'

export const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectorUser);   
    return (
        <Wrap>
            <P>Welcome, {userName.name}</P>
            <Button type="button" onClick={() => dispatch(logOut())}> Logout</Button>
        </Wrap>
    );

}