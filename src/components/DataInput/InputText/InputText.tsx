import { InputTextContainer } from './InputText.styles';

type InputTextProps = {
  placeholder?: string;
  value: string;
};

export const InputText = ({ placeholder, value, ...rest }: InputTextProps): JSX.Element => (
  <InputTextContainer
    type="text"
    value={value}
    placeholder={placeholder}
    {...rest}
  />
);
