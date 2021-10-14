import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { globalStyles } from './styles/globalStyles';
import { Button } from './components/Button/Button';

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
    <h1>
      Hello World <FontAwesomeIcon icon={faCoffee} />
      <Button>Save</Button>
    </h1>
  );
}

export default App;
