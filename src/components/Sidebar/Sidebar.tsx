import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon/Icon';
import * as S from './Sidebar.styles';

type SidebarProps = {
  collapsed: boolean;
  children: React.ReactNode;
  onCollapseChange: () => void;
};

export const Sidebar = ({
  collapsed,
  onCollapseChange,
  children,
}: SidebarProps): JSX.Element => (
  <S.SidebarContainer>
    <S.SidebarContent collapsed={collapsed}>{children}</S.SidebarContent>
    <S.SidebarButton collapsed={collapsed} onClick={onCollapseChange}>
      <Icon icon={faBars} iconSize={17} />
    </S.SidebarButton>
  </S.SidebarContainer>
);
