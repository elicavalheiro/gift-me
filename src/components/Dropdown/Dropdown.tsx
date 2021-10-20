import * as S from './Dropdown.styles';

type DropdownProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export const Dropdown = ({ trigger, children }: DropdownProps): JSX.Element => (
  <>
    <S.Dropdown>
      <S.DropdownTrigger>{trigger}</S.DropdownTrigger>
      <S.DropdownContent sideOffset={5}>
        {children}
        <S.DropdownArrow offset={20} />
      </S.DropdownContent>
    </S.Dropdown>
  </>
);

type DropdownItemProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

export const DropdownItem = ({
  onClick,
  disabled = false,
  children,
}: DropdownItemProps): JSX.Element => (
  <S.DropdownItem disabled={disabled} onSelect={onClick}>
    {children}
  </S.DropdownItem>
);
