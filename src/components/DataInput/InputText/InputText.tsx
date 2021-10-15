import * as S from './InputText.styles';

type InputTextProps = {
  placeholder?: string;
  value: string;
};

export const InputText = ({
  placeholder,
  value,
  ...rest
}: InputTextProps): JSX.Element => (
  <S.InputTextContainer
    type="text"
    value={value}
    placeholder={placeholder}
    {...rest}
  />
);
