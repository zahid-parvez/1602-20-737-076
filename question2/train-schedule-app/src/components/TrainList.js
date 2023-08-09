import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

function TrainList() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    ApiService.getAllTrains()
      .then(data => setTrains(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {trains.map(train => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          {/* Display more train details */}
        </div>
      ))}
    </div>
  );
}

export default TrainList;
