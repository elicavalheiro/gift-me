import { faHome, faList } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SidebarItem } from './components/Sidebar/SidebarItem/SidebarItem';
import { CategoryPage } from './pages/Category/Category';
import { HomePage } from './pages/Home/Home';
import { globalStyles } from './styles/globalStyles';

function App(): JSX.Element {
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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </>
  );
}

export default App;
