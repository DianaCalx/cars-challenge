import { IconType } from 'react-icons';
import { StyledComponent } from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit';
  StyledButton: StyledComponent<'button' | IconType, any, {}, never>;
  disabled?: boolean;
}

const Button = ({
  children,
  type = 'button',
  onClick,
  StyledButton,
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
