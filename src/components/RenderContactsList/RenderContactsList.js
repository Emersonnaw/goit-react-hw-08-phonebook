import { useDispatch, useSelector} from "react-redux";
import { Ul, Li, P, Button } from './RenderContactsList.styled';
import { removeContact } from 'redux/contacts/operations';
import { selectFilter } from 'redux/Filter/selectors';
import { selectContacts } from 'redux/contacts/selectors'; 

export const RenderContactList = () => {
  const dispatch = useDispatch();
  const contacts =  useSelector(selectContacts);
  const filterList = useSelector(selectFilter);

  return (
    <>
      <Ul>
          {contacts.filter(contact => contact.name.toLowerCase().includes(filterList.toLowerCase())).map(({ id, name, number }) => (
          <Li key={id}>
            <P>
              &#9742; &#160;{name}: {number}
            </P>
                <Button onClick={() =>  dispatch(removeContact(id))}>Delete contact</Button> 
          </Li>
        ))}
      </Ul>
    </>
  );
};