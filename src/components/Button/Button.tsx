import { ButtonContainer, ButtonContainerVariants } from './Button.styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'rounded' | 'ghost';
  children: React.ReactNode;
} & ButtonContainerVariants;

export const Button = ({
  type = 'primary',
  children,
  ...rest
}: ButtonProps): JSX.Element => (
  <ButtonContainer type={type} {...rest}>
    {children}
  </ButtonContainer>
);
