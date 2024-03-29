import { useDispatch } from 'react-redux';

import { registration } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    
     dispatch(
      registration({
        name: form.elements.name.value.trim(),
        email: form.elements.email.value.trim(),
        password: form.elements.password.value.trim(),
      })
     );
    form.reset();
  };

  return (
    <Form  onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Username
        <Input type="text" name="name" />
      </Label>
      <Label >
        Email
        <Input type="email" name="email" />
      </Label>
      <Label >
        Password
        <Input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
