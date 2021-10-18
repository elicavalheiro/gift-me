import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSS } from '../../stitches.config';
import * as S from './Icon.styles';

type IconProps = {
  icon: IconProp;
  css?: CSS;
  iconSize?: number;
};

export const Icon = ({ icon, css, iconSize = 12 }: IconProps): JSX.Element => (
  <S.IconContainer css={css} style={{ fontSize: iconSize }}>
    <FontAwesomeIcon icon={icon} />
  </S.IconContainer>
);
