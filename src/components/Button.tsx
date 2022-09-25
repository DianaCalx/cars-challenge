import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { IoMdCloseCircle } from 'react-icons/io';
import styled from 'styled-components';

const FillStar = styled(HiStar)`
  cursor: pointer;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.darkColor2};
`;

const OutlineStar = styled(HiOutlineStar)`
  cursor: pointer;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.darkColor2};
`;

const generalStyle = `  
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
`;

const DetailsButton = styled.button`
  width: 10%;
  height: 3.5rem;
  ${generalStyle};
  border: 2px solid ${(props) => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.darkColor};

  &:hover {
    background: ${(props) => props.theme.colors.darkColor2};
  }
`;

const PrimaryButton = styled.button`
  min-width: 13rem;
  height: 3.5rem;
  ${generalStyle};
  border: 2px solid ${(props) => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.darkColor};

  &:hover {
    background: ${(props) => props.theme.colors.darkColor2};
  }
`;

const SecondaryButton = styled.button`
  min-width: 13rem;
  height: 4rem;
  ${generalStyle};
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.colors.successColor};
  background: ${(props) => props.theme.colors.successColor};
  color: white;

  &:hover {
    background: ${(props) => props.theme.colors.successColor2};
  }
`;

const Submit = styled.button`
  min-width: 13rem;
  height: 3.5rem;
  ${generalStyle};
  border: 2px solid ${(props) => props.theme.colors.successColor};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.successColor};
  color: white;

  &:hover {
    background: ${(props) => props.theme.colors.successColor2};
  }
`;

const CloseButton = styled(IoMdCloseCircle)`
  fill: ${(props) => props.theme.colors.errorColorLight};
  position: absolute;
  top: -4rem;
  right: -0.5rem;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.colors.errorColorLight};
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.colors.errorColorDark};
  }
`;

const SubmitForm = styled.button`
  height: 3rem;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.successColor};
  :hover {
    background-color: ${(props) => props.theme.colors.successColor2};
  }
  :disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit';
  styleButton: string;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  onClick,
  styleButton,
  disabled = false,
}: ButtonProps) => {
  switch (styleButton) {
    case 'FillStar':
      return (
        <FillStar type={type} onClick={onClick}>
          {children}
        </FillStar>
      );
    case 'OutlineStar':
      return (
        <OutlineStar type={type} onClick={onClick}>
          {children}
        </OutlineStar>
      );
    case 'DetailsButton':
      return (
        <DetailsButton type={type} onClick={onClick} disabled={disabled}>
          {children}
        </DetailsButton>
      );
    case 'PrimaryButton':
      return (
        <PrimaryButton type={type} onClick={onClick} disabled={disabled}>
          {children}
        </PrimaryButton>
      );
    case 'SecondaryButton':
      return (
        <SecondaryButton type={type} onClick={onClick} disabled={disabled}>
          {children}
        </SecondaryButton>
      );
    case 'Submit':
      return (
        <Submit type={type} onClick={onClick} disabled={disabled}>
          {children}
        </Submit>
      );
    case 'XButton':
      return (
        <CloseButton type={type} onClick={onClick}>
          {children}
        </CloseButton>
      );
    case 'DeleteButton':
      return (
        <DeleteButton type={type} onClick={onClick} disabled={disabled}>
          {children}
        </DeleteButton>
      );
    case 'SubmitForm':
      return (
        <SubmitForm type={type} onClick={onClick} disabled={disabled}>
          {children}
        </SubmitForm>
      );
    default:
      return (
        <button type={type} onClick={onClick} disabled={disabled}>
          {children}
        </button>
      );
  }
};

export default Button;
