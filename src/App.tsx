import { useEffect } from 'react';

function App(): JSX.Element {
  useEffect(() => {
    fetch('http://localhost:3000/api/gifts').then((response) =>
      response.json()
    );

    fetch('http://localhost:3000/api/categories').then((response) =>
      response.json()
    );
  }, []);

  return <h1>Hello World</h1>;
}

export default App;
