import { ButtonContainer, ButtonContainerVariants } from './Button.styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'rounded' | 'ghost';
  children: React.ReactNode;
} & ButtonContainerVariants;

export const Button = ({
  type = 'primary',
  children,
  ...props
}: ButtonProps): JSX.Element => (
  <ButtonContainer type={type} {...props}>
    {children}
  </ButtonContainer>
);
