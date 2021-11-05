import { faHome, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Dialog, DialogContent, DialogTrigger } from '../Dialog';
import { Header } from '../Header/Header';
import { Icon } from '../Icon/Icon';
import { Sidebar } from '../Sidebar/Sidebar';
import { SidebarItem } from '../Sidebar/SidebarItem/SidebarItem';
import * as S from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <S.LayoutContainer collapsed={isSidebarCollapsed}>
      <S.LayoutSidebar>
        <Sidebar
          collapsed={isSidebarCollapsed}
          onCollapseChange={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        >
          <SidebarItem icon={faHome}>Home</SidebarItem>
          <SidebarItem hasSubItem icon={faList}>
            Categories
          </SidebarItem>
          <SidebarItem isSubItem>Home</SidebarItem>
        </Sidebar>
      </S.LayoutSidebar>

      <S.LayoutHeader>
        <Header />
      </S.LayoutHeader>

      <S.LayoutContent>{children}</S.LayoutContent>

      {/* Create NewGiftDialog component */}
      <Dialog isOpen={isDialogOpen}>
        <DialogTrigger>
          <S.AddButton>
            <Button type="rounded" onClick={() => setIsDialogOpen(true)}>
              <Icon icon={faPlus} iconSize={20} />
            </Button>
          </S.AddButton>
        </DialogTrigger>
        <DialogContent
          title="Title"
          closeDialog={() => setIsDialogOpen(false)}
          cancelButton={
            <Button type="secondary" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
          }
          successButton={
            <Button type="primary" onClick={() => setIsDialogOpen(false)}>
              Save
            </Button>
          }
        >
          Content...
        </DialogContent>
      </Dialog>
    </S.LayoutContainer>
  );
};
