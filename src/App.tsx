import React from 'react';
import Map from './Map';

const App: React.FC = () => {
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://earthquakes.bgs.ac.uk/feeds/MhSeismology.xml')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
      .then(data => {
        // const { name } = data.results[0];
        console.log(data);
        setRawData(data);
      });
  }, []);

  return (
    <div>
      Data:
      {/* {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`} */}
    </div>
  );
};

export default App;
