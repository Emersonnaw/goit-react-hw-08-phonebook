
import { useSelector, useDispatch } from "react-redux";
import { P, Input } from './FilterContacts.styled'
import {inputFilter} from 'redux/Filter/FilterSlice'
import { selectFilter } from 'redux/Filter/selectors'; 

export const FilterContacts= () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    return (
        <>
            <P>Find contacts by name</P>
            <Input
                value={filter}
                type="text"
                name="filter"
                onChange={(evt) => {dispatch(inputFilter(evt.currentTarget.value.toLowerCase()))} }
            />
        </>
    );
}