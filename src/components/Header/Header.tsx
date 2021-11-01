import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../assets/images/logo.svg';
import { Dropdown, DropdownItem } from '../Dropdown';
import { Icon } from '../Icon/Icon';
import * as S from './Header.styles';

export const Header = (): JSX.Element => (
  <S.HeaderContainer>
    {/* TODO: change HeaderLogo tag from "a" to "Link" */}
    <S.HeaderLogo href="#">
      <img src={LogoImg} alt="Logo" />
    </S.HeaderLogo>

    <Dropdown
      trigger={
        <S.HeaderAvatar>
          <Icon icon={faUser} css={{ color: '$accent10' }} iconSize={14} />
        </S.HeaderAvatar>
      }
    >
      <DropdownItem>Manage Categories</DropdownItem>
      <DropdownItem disabled>Settings</DropdownItem>
      <DropdownItem disabled>Logout</DropdownItem>
    </Dropdown>
  </S.HeaderContainer>
);
