import * as S from './DialogRoot.styles';

type DialogRootProps = {
  children: React.ReactNode;
  isOpen?: boolean;
};

export const DialogRoot = ({
  isOpen,
  children,
}: DialogRootProps): JSX.Element => (
  <S.DialogRoot open={isOpen}>
    <S.DialogOverlay />
    {children}
  </S.DialogRoot>
);
