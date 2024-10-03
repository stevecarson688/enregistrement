import './App.css';
import React, { useState } from 'react';

function App() {
  const [workers, setWorkers] = useState([]);
  const [workerName, setWorkerName] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const handleAddWorker = () => {
    if (workerName && arrivalTime && departureTime) {
      const newWorker = {
        name: workerName,
        arrival: arrivalTime,
        departure: departureTime,
      };
      setWorkers([...workers, newWorker]);
      setWorkerName('');
      setArrivalTime('');
      setDepartureTime('');
    }
  };

  return (
    <div>
      <h1>Enregistrement des Heures d'Arrivée et de Sortie</h1>
      <input
        type="text"
        placeholder="Nom de l'ouvrier"
        value={workerName}
        onChange={(e) => setWorkerName(e.target.value)}
      />
      <input
        type="time"
        value={arrivalTime}
        onChange={(e) => setArrivalTime(e.target.value)}
      />
      <input
        type="time"
        value={departureTime}
        onChange={(e) => setDepartureTime(e.target.value)}
      />
      <button onClick={handleAddWorker}>Enregistrer</button>

      <h2>Liste des Ouvriers</h2>
      <ul>
        {workers.map((worker, index) => (
          <li key={index}>
            {worker.name} - Arrivée: {worker.arrival} - Sortie: {worker.departure}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;