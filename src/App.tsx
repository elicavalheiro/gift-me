import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { globalStyles } from './styles/globalStyles';
import { Checkbox } from './components/Checkbox/Checkbox';

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
      Hello World <FontAwesomeIcon icon={faCoffee} />
      <Checkbox>Label</Checkbox>
    </>
  );
}

export default App;
