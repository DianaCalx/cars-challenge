import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Error from '../components/Error';
import { useAppContext } from '../context/appContext';
import { useUserLazyQuery } from '../generated/graphql';
import useLocalStorage from '../hooks/useLocalStorage';
import { loginSchema } from '../utils/yupSchemas';
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
  background: ${(props) => props.theme.gradient};
  z-index: 100;
  border-radius: 1rem;
`;

const InputEmail = styled.input`
  background-color: white;
  border-style: none;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
  width: 20rem;
`;

interface LoginFormInputs {
  email: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ resolver: yupResolver(loginSchema) });
  const { setUser, setIsLoginModalOpen } = useAppContext();
  const { setLocalStorage } = useLocalStorage();
  const [execute, { loading, error }] = useUserLazyQuery({
    onCompleted(data) {
      setUser(data.users.at(0));
      setLocalStorage('user', data.users.at(0));
      setIsLoginModalOpen(false);
    },
  });

  const onSubmit = (data: LoginFormInputs) => {
    execute({
      variables: {
        where: {
          email: {
            _eq: data.email,
          },
        },
      },
    });
  };

  return (
    <Container>
      <Form>
        <Button
          styleButton="XButton"
          onClick={() => setIsLoginModalOpen(false)}
        />
        <InputEmail placeholder="Your email..." {...register('email')} />
        {errors?.email?.message && (
          <Error type="loginError">{errors?.email?.message}</Error>
        )}
        <Button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          styleButton="Submit"
          disabled={loading}
        >
          {loading ? 'loading...' : 'login'}
        </Button>
        {error && <Error type="loginError">There was an error</Error>}
      </Form>
    </Container>
  );
};

export default Login;
