import React from 'react';
import Map from './Map';
import { xml2json } from 'xml-js';

const App: React.FC = () => {
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://earthquakes.bgs.ac.uk/feeds/MhSeismology.xml')
      .then(response => response.text())
      .then(str => xml2json(str))
      .then(data => {
        // const { name } = data.results[0];
        console.log(data);
        // setRawData(data);
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
