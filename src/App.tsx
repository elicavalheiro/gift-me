import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
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
      Hello World <Icon icon={faCoffee} iconSize={20} />
    </>
  );
}

export default App;
