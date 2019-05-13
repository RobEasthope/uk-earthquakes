import React from 'react';
import Map from './Map';
import { xml2json } from 'xml-js';

const App: React.FC = () => {
  const [title, setTitle] = React.useState(null);
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fearthquakes.bgs.ac.uk%2Ffeeds%2FMhSeismology.xml'
    )
      .then(response => response.json())
      .then(data => {
        setTitle(data.feed.title);
        setItems(data.items);
      });
  }, []);

  return (
    <div>
      Data:
      {!title ? 'Loading...' : ` ${title}`}
    </div>
  );
};

export default App;
