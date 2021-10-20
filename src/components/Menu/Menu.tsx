import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon/Icon';
import * as S from './Menu.styles';

type MenuProps = {
  collapsed: boolean;
  children: React.ReactNode;
  onCollapseChange: () => void;
};

export const Menu = ({
  collapsed,
  onCollapseChange,
  children,
}: MenuProps): JSX.Element => (
  <S.MenuContainer>
    <S.MenuContent collapsed={collapsed}>
      {!collapsed && children}
    </S.MenuContent>
    <S.MenuButton onClick={onCollapseChange}>
      <Icon icon={faBars} iconSize={17} />
    </S.MenuButton>
  </S.MenuContainer>
);
