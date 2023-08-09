import React, { useState, useEffect } from 'react';
import './App.css';

const API_BASE_URL = 'http://20.244.56.144';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/train/trains`, {
        headers: {
          Authorization: `Bearer YOUR_ACCESS_TOKEN`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTrains(data);
      } else {
        console.error('Error fetching trains data');
      }
    } catch (error) {
      console.error('Error fetching trains data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Train Schedule App</h1>
      </header>
      <main>
        <section className="train-list">
          <h2>All Trains</h2>
          <ul>
            {trains.map((train) => (
              <li key={train.trainNumber}>
                <p>Train Name: {train.trainName}</p>
                <p>Train Number: {train.trainNumber}</p>
                <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
                <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
                <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
                <p>Price (Sleeper): {train.price.sleeper}</p>
                <p>Price (AC): {train.price.AC}</p>
                <p>Delayed By: {train.delayedBy} minutes</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
