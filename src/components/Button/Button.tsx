import * as S from './Button.styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'rounded' | 'ghost';
  children: React.ReactNode;
} & S.ButtonContainerVariants;

export const Button = ({
  type = 'primary',
  children,
  ...rest
}: ButtonProps): JSX.Element => (
  <S.ButtonContainer type={type} {...rest}>
    {children}
  </S.ButtonContainer>
);
