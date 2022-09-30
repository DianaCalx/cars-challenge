import styled from 'styled-components';

const ErrorContainer = styled.p<{ type?: string }>`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 0;

  color: ${(props) =>
    ((props.type === 'detailError' || props.type === 'loginError') &&
      'white') ||
    (props.type === 'warningError' && props.theme.colors.errorColorLight) ||
    (props.type === 'normalError' && 'black')};

  font-size: ${(props) =>
    (props.type === 'warningError' && '1.2rem') ||
    (props.type === 'loginError' && '1.5rem')};

  text-align: ${(props) => props.type === 'warningError' && 'left'};
  font-weight: ${(props) => props.type === 'warningError' && 'normal'};
  background-color: ${(props) =>
    props.type === 'loginError' && props.theme.colors.errorColorLight};
  padding: ${(props) => props.type === 'loginError' && '0.5rem 1rem'};
`;

interface ErrorProps {
  children?: React.ReactNode;
  type: string;
}

const Error = ({ children, type }: ErrorProps) => {
  return <ErrorContainer type={type}>{children}</ErrorContainer>;
};

export default Error;
