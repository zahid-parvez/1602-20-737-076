import React, { useState } from 'react';
import UrlInput from './components/UrlInput';
import NumberList from './components/NumberList';
import './App.css'
function App() {
  const [urls, setUrls] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const addUrl = (url) => {
    setUrls([...urls, url]);
  };

  const fetchNumbers = async () => {
    alert("fetching the response");
    const responsePromises = urls.map((url) => fetch(url).then((response) => response.json()));

    const responses = await Promise.allSettled(responsePromises);

    const validResponses = responses
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value.numbers)
      .flat();

    const uniqueNumbers = [...new Set(validResponses)].sort((a, b) => a - b);

    setNumbers(uniqueNumbers);
  };

  return (
    <div className='container'>
      <h1>Number Management MicroService</h1>
      <UrlInput onAddUrl={addUrl} />
      <button className='button-primary' onClick={fetchNumbers}>Fetch Numbers</button>
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
