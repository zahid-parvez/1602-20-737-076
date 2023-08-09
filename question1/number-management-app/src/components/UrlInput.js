import React, { useState } from 'react';
import '../UrlInput.css';
function UrlInput({ onAddUrl }) {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAddUrl = () => {
    onAddUrl(url);
    setUrl('');
  };

  return (
    <div className="url-input-container">
      <input type="text" value={url} onChange={handleUrlChange} />
      <button onClick={handleAddUrl}>Add URL</button>
    </div>
  );
}

export default UrlInput;
