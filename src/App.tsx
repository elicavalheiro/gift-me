import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { CategoryPage } from './pages/Category/Category';
import { HomePage } from './pages/Home/Home';
import { globalStyles } from './styles/globalStyles';

function App(): JSX.Element {
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
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
