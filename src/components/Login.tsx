import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { emailRegex } from '../utils/regularExp';
import { IoMdCloseCircle } from 'react-icons/io';
import { useUserLazyQuery } from '../generated/graphql';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';
import styled from 'styled-components';

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
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
  z-index: 100;
  border-radius: 1rem;
`;

const XButton = styled(IoMdCloseCircle)`
  fill: ${props => props.theme.colors.errorColorLight};
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
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.successColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.successColor}; 
  color: white;

  &:hover{
    background: ${props => props.theme.colors.successColor2};
  }
`;

const Error = styled.p`
 color: ${props => props.theme.colors.errorColor};
 font-weight: bold;
 margin:0;
 text-align: center;
`;
interface LoginFormInputs {
  email: string
}

const schema = Yup.object().shape({
  email: Yup.string().required().matches(emailRegex,'Invalid Email'),
});

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({resolver: yupResolver(schema)});
  const [execute, { loading, data, error }] = useUserLazyQuery();
  const { setUser, setIsLoginModalOpen } = useAppContext();
  const { setLocalStorage } = useLocalStorage();

  useEffect(() => {  
    if (data?.users?.length && !loading && !error) {
      setUser(data.users.at(0));
      setLocalStorage('user', data.users.at(0));
      setIsLoginModalOpen(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, loading]);

  const onSubmit= (data:LoginFormInputs) => {
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
        <InputEmail placeholder="Your email..." {...register("email")} />
        {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
        <Button type="submit" onClick={handleSubmit(onSubmit)} StyledButton={Submit}>{loading ? 'loading...': 'login'}</Button>
        { error && <p>There was an error </p>}
      </Form>
    </Container>
  )
}

export default Login