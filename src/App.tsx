import React from 'react';
import Map from './Map';

const App: React.FC = () => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);

  React.useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        const { name } = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      });
  }, []);

  return (
    <div>
      Name:{' '}
      {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
    </div>
  );
};

export default App;
