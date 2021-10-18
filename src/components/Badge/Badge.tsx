import * as S from './Badge.styles';

type BadgeProps = {
  colorId?: number;
  children: React.ReactNode;
};

type Color = {
  [x: number]: 'blue' | 'pink' | 'yellow' | 'purple';
};

const color: Color = {
  1: 'blue',
  2: 'pink',
  3: 'yellow',
  4: 'purple',
};

export const Badge = ({ colorId = 1, children }: BadgeProps): JSX.Element => (
  <S.BadgeWrapper>
    <S.BadgeContainer color={color[colorId]}># {children}</S.BadgeContainer>
  </S.BadgeWrapper>
);
