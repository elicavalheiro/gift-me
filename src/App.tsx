import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Card } from './components/Card/Card';
import { Icon } from './components/Icon/Icon';
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
      </div>
    </>
  );
}

export default App;
