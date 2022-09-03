import { IconType } from "react-icons";
import { StyledComponent } from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit'
  StyledButton: StyledComponent<"button" | IconType, any, {}, never>
}

const Button = ({ children, type='button', onClick, StyledButton }: ButtonProps) => {
  return (
    <StyledButton type={type} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button