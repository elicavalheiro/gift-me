import { faCoffee, faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';
import { Dialog, DialogContent, DialogTrigger } from './components/Dialog';
import { Header } from './components/Header/Header';
import { Icon } from './components/Icon/Icon';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem/SidebarItem';
import { globalStyles } from './styles/globalStyles';

function App(): JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  globalStyles();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/api/gifts`).then((response) =>
      response.json()
    );

    fetch(`${process.env.REACT_APP_BASE_URL}/api/categories`).then((response) =>
      response.json()
    );
  }, []);

  return (
    <>
      <Header />

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

      <div style={{ padding: 20 }}>
        <h2 style={{ margin: 10 }}>
          Hello World <Icon icon={faCoffee} iconSize={20} />
        </h2>

        <Card
          title="Notebook"
          imageUrl="https://source.unsplash.com/1600x900/?laptop"
          link="#"
          description="Notebook Acer 17”, SSD 512GB, 16GB de RAM, Placa de vídeo GTX 1650 Super"
          badges={[
            { id: 1, name: 'games' },
            { id: 2, name: 'music' },
            { id: 3, name: 'clothes' },
          ]}
          price="5749,90"
        />

        <Dialog isOpen={isDialogOpen}>
          <DialogTrigger>
            <Button onClick={() => setIsDialogOpen(true)} type="primary">
              Open Dialog
            </Button>
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
      </div>
    </>
  );
}

export default App;
