import React, { useEffect, useState } from 'react';
import ApiService from '../services/ApiService';

function TrainDetails({ trainNumber }) {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    ApiService.getTrainDetails(trainNumber)
      .then(data => setTrain(data))
      .catch(error => console.error(error));
  }, [trainNumber]);

  if (!train) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
      {/* Display more train details */}
    </div>
  );
}

export default TrainDetails;
