import * as S from './Button.styles';

type ButtonProps = {
  type?: 'primary' | 'secondary' | 'rounded' | 'ghost';
  onClick?: () => void;
  children: React.ReactNode;
} & S.ButtonContainerVariants;

export const Button = ({
  type = 'primary',
  onClick,
  children,
  ...rest
}: ButtonProps): JSX.Element => (
  <S.ButtonContainer type={type} onClick={onClick} {...rest}>
    {children}
  </S.ButtonContainer>
);
