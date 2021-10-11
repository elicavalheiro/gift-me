import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { globalStyles } from './styles/globalStyles';

function App(): JSX.Element {
  globalStyles();

  useEffect(() => {
    fetch('http://localhost:3000/api/gifts').then((response) =>
      response.json()
    );

    fetch('http://localhost:3000/api/categories').then((response) =>
      response.json()
    );
  }, []);

  return (
    <h1>
      Hello World <FontAwesomeIcon icon={faCoffee} />
    </h1>
  );
}

export default App;
