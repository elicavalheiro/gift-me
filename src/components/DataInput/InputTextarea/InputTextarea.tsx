import * as S from './InputTextarea.styles';

type InputTextareaProps = {
  value?: string;
  placeholder?: string;
};

export const InputTextarea = ({
  value,
  placeholder,
  ...rest
}: InputTextareaProps) => (
  <S.InputTextareaContainer
    name="textarea"
    rows={3}
    value={value}
    placeholder={placeholder}
    {...rest}
  />
);
