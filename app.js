import React from "react";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Smart Grid Energy Prediction</h1>

      <h2>Forecast Chart</h2>
      {/* Replace with your actual image path */}
      <img 
        src="sample_forecast.png" 
        alt="Energy Forecast" 
        width="500" 
      />

      <h2>Predicted Values</h2>
      <table border="1" style={{ margin: "0 auto", padding: "10px" }}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Predicted Consumption (MW)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-05-14</td>
            <td>340</td>
          </tr>
          <tr>
            <td>2025-05-15</td>
            <td>345</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
