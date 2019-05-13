import React from 'react';
import Map from './Map';
import { xml2json } from 'xml-js';

const App: React.FC = () => {
  const [title, setTitle] = React.useState();
  const [items, setItems] = React.useState();

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
      {items &&
        items.map((quake: { title: string }) => <div>{quake.title}</div>)}
    </div>
  );
};

export default App;
