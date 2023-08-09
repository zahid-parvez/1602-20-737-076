import React from 'react';
import '../NumberList.css'; // Importing the CSS file for styling
function NumberList({ numbers }) {
  return (
    <div className='number-list-container'>
      <h2>Merged Unique Integers</h2>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default NumberList;
