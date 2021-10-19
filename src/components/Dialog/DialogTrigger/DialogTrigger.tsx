import * as S from './DialogTrigger.styles';

type DialogTriggerProps = {
  children: React.ReactNode;
};

export const DialogTrigger = ({
  children,
}: DialogTriggerProps): JSX.Element => (
  <S.DialogTrigger>{children}</S.DialogTrigger>
);
