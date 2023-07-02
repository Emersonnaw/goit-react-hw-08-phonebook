import { toast} from 'react-toastify';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, ErrorMessage } from 'formik';
import { Container,  FormCastom, LabelCastom, InputCastom,Button } from './FormAddContacts.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

let userSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().min(4),
});

const initialValues = {
  name: '',
  number: '',
};

export const FormAddContacts = () => {
const contacts = useSelector(selectContacts);
const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
  const checkExistContact = contacts.find(contact => contact.name.toLowerCase() === values.name.toLowerCase());
  if (!checkExistContact) {
     
    dispatch(addContacts(values));
    } else {
     toast.error(`"${values.name.toUpperCase()} "is already in contacts`, {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });   
    }
    resetForm();
  }

  
  return (
    <Container>
    <Formik initialValues={initialValues}  validationSchema={userSchema} onSubmit={handleSubmit}>
    <FormCastom>
      <LabelCastom>
        Name
        <InputCastom
        type="text"
        name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
            />
          <ErrorMessage name="name" />
        </LabelCastom>
        <LabelCastom>
          Number
          <InputCastom
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
          <ErrorMessage name="number" />
        </LabelCastom>
       <Button  type="submit"> Add contact </Button>
    </FormCastom>
    </Formik>
  </Container>
  );
  
};