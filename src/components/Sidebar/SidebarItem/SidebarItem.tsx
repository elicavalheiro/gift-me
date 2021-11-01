import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../Icon/Icon';
import * as S from './SidebarItem.styles';

type SidebarItemProps = {
  icon?: IconProp;
  isActive?: boolean;
  hasSubItem?: boolean;
  isSubItem?: boolean;
  collapsed?: boolean;
  children: React.ReactNode;
};

export const SidebarItem = ({
  icon,
  isActive = false,
  hasSubItem = false,
  isSubItem = false,
  collapsed = false,
  children,
}: SidebarItemProps): JSX.Element => {
  const arrow = collapsed ? faChevronDown : faChevronRight;

  return (
    <S.SidebarItemContainer
      isActive={isActive}
      hasSubItem={hasSubItem}
      isSubItem={isSubItem}
    >
      {isSubItem && <p style={{ paddingRight: '8px' }}>#</p>}

      <div>
        {icon && (
          <Icon icon={icon} iconSize={15} css={{ marginRight: '$small2' }} />
        )}
        {children}
      </div>
      {hasSubItem && (
        <Icon icon={arrow} iconSize={15} css={{ justifySelf: 'end' }} />
      )}
    </S.SidebarItemContainer>
  );
};
