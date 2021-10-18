import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './Checkbox.styles';

type CheckboxProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  value?: string;
  children: React.ReactNode;
};

export const Checkbox = ({
  children,
  onChange,
  ...rest
}: CheckboxProps): JSX.Element => (
  <S.CheckboxContainer>
    <S.CheckboxRoot id="checkbox" onCheckedChange={onChange} {...rest}>
      <S.CheckboxIndicator>
        <FontAwesomeIcon icon={faCheck} />
      </S.CheckboxIndicator>
    </S.CheckboxRoot>
    <S.CheckboxLabel htmlFor="checkbox">{children}</S.CheckboxLabel>
  </S.CheckboxContainer>
);
