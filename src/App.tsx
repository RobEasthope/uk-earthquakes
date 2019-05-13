import React from 'react';
import Map from './Map';

function User() {
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
  }, []); // <-- Have to pass in [] here!

  return (
    <div>
      Name:{' '}
      {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
    </div>
  );
}

const App: React.FC = () => {
  return (
    <React.Fragment>
      <User />
      {/* <Map /> */}
    </React.Fragment>
  );
};

export default App;
