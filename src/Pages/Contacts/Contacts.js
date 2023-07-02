import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormAddContacts } from "components/FormAddContacts/FormAddContacts";
import { Wrapper } from './Contacts.styled';
import { RenderContactList } from 'components/RenderContactsList/RenderContactsList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectError, selectLoading } from 'redux/contacts/selectors';
import { FilterContacts } from 'FilterContacts/FilterContacts';
import ProgresBar from 'components/Loaders/ProgresBar';
export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 
  return (
    <Wrapper>
        <title>Contacts</title>
        <FormAddContacts />
          
      <div>{isLoading && !error && <ProgresBar />}</div> 
      {contacts.length >1 &&  <FilterContacts />}
      {contacts.length >0 && <RenderContactList /> }
    </Wrapper>
  );
}