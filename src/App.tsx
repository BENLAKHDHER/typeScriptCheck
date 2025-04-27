// src/App.tsx

import React from "react";
import "./styles.css"; // Import the external CSS file

// Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Define the Car class implementing the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Implement the start method
  start(): void {
    console.log("Car engine started");
  }
}

// Define the App component
const App: React.FC = () => {
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2022);

  // Simulate starting the car engine
  const handleStart = () => {
    myCar.start();
  };

  return (
    <div className="container">
      <h1>Car Details</h1>
      <p>
        <strong>Make:</strong> {myCar.make}
      </p>
      <p>
        <strong>Model:</strong> {myCar.model}
      </p>
      <p>
        <strong>Year:</strong> {myCar.year}
      </p>
      <button onClick={handleStart}>Start Engine</button>
    </div>
  );
};

export default App;