import * as S from './InputNumber.styles';

type InputNumberProps = {
  value: string;
  placeholder?: string;
};

export const InputNumber = ({
  value,
  placeholder,
  ...rest
}: InputNumberProps): JSX.Element => (
  <S.InputNumberContainer
    value={value}
    placeholder={placeholder}
    displayType="input"
    prefix="R$"
    thousandSeparator="."
    decimalSeparator=","
    {...rest}
  />
);
