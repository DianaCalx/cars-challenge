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
`;

const XButton = styled(IoMdCloseCircle)`
  fill: ${props => props.theme.colors.errorColor};;
  position: absolute;
  top: -4rem;
  right: -0.5rem;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const InputEmail = styled.input`
  background-color: white;
  border-style: none;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
  width: 20rem;
`;

const Submit = styled.button`
  min-width: 13rem;
  height: 3rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.mainColor}; 
  color: ${props => props.theme.colors.darkColor2}; 

  &:hover{
    background: ${props => props.theme.colors.darkColor};
    color: white;
  }

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
      <Form>
        <Button StyledButton={XButton} onClick={() => setIsLoginModalOpen(false)} />
        <InputEmail placeholder="Your email..." {...register("email", { required: true, pattern: emailRegex })} />
        { errorForm && <p>{errorForm}</p> }
        <Button type="submit" onClick={handleSubmit(onSubmit)} StyledButton={Submit} > Login </Button>
      </Form>
    </Container>
  )
}

export default Login