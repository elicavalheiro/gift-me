import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../../Icon/Icon';
import * as S from './DialogContent.styles';

type DialogContentProps = {
  title: string;
  children: React.ReactNode;
  cancelButton?: React.ReactNode;
  successButton?: React.ReactNode;
  closeDialog?: () => void;
};

export const DialogContent = ({
  title,
  children,
  cancelButton,
  successButton,
  closeDialog,
}: DialogContentProps): JSX.Element => (
  <S.DialogContent onInteractOutside={closeDialog}>
    <S.DialogHeader>
      <S.DialogTitle>{title}</S.DialogTitle>
      <S.DialogCloseIcon onClick={closeDialog}>
        <Icon icon={faTimes} iconSize={15} css={{ color: '$mauve12' }} />
      </S.DialogCloseIcon>
    </S.DialogHeader>
    <S.DialogDescription>{children}</S.DialogDescription>
    <S.DialogFooter onlySuccess={!cancelButton}>
      {cancelButton && <S.DialogClose>{cancelButton}</S.DialogClose>}
      {successButton && <S.DialogClose>{successButton}</S.DialogClose>}
    </S.DialogFooter>
  </S.DialogContent>
);
