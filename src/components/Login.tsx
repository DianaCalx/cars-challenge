import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { emailRegex } from '../utils/regularExp';
import { IoMdCloseCircle } from 'react-icons/io';
import { useUserLazyQuery } from '../generated/graphql';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  background-color: ${props => props.theme.colors.mainColor};
  z-index: 100;
  border-radius: 1rem;

  & > input {
    padding: 1rem 2rem;
    outline: none;

    &:last-of-type {
      border: 1px solid black;
      border-radius: 0.5rem;
      cursor: pointer;
      background-color: ${props => props.theme.colors.successColor};
    }
  }
`;

const XButton = styled(IoMdCloseCircle)`
  fill: ${props => props.theme.colors.errorColor};;
  position: absolute;
  top: -3rem;
  right: -0.5rem;
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  cursor: pointer;
`;

interface LoginFormInputs {
  email: string
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [errorForm, setErrorForm] = useState<string>('');
  const [execute, { loading, data, error }] = useUserLazyQuery();
  const { setUser, setIsLoginModalOpen } = useAppContext();
  const { setLocalStorage } = useLocalStorage();

  useEffect(() => {
    if(errors.email?.type === 'required'){
      addAlert('Email cannot be empty');
    }

    if(errors.email?.type === 'pattern'){
      addAlert('Invalid Email');
    }
    
    if (data?.users?.length && !loading && !error) {
      setUser(data.users.at(0));
      setLocalStorage('user', data.users.at(0));
      setIsLoginModalOpen(false);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, loading, errors]);

  const addAlert = (message:string) => {
    setErrorForm(message);
    setTimeout(() => {
      setErrorForm('');
    }, 2000);
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = data => {
    execute({ 
      variables: {
        where: {
          email: {
            _eq: data.email
          }
        }
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Button StyledButton={XButton} onClick={() => setIsLoginModalOpen(false)} />
        <input placeholder="Your email..." {...register("email", { required: true, pattern: emailRegex })} />
        { errorForm && <p>{errorForm}</p> }
        <input type="submit" value="Login" />
      </Form>
    </Container>
  )
}

export default Login