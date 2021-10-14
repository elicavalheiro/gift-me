import { Container, ContainerVariants } from './Button.styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'rounded' | 'ghost';
  children: React.ReactNode;
} & ContainerVariants;

export const Button = ({
  type = 'primary',
  children,
  ...props
}: ButtonProps): JSX.Element => (
  <Container type={type} {...props}>
    {children}
  </Container>
);
