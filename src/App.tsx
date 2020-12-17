import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import './App.css';

function App() {
  return (
    <table id="t01">
    <tr>
      <td>{data.shipmentHistory.map((detail) =>{
        return <h3>{detail.eventDateTime.toString}</h3>
      })}</td>
      <td>{data.shipmentHistory.map((detail) => {
        return <h3>{detail.eventPosition.city}</h3>
      })}</td>
      <td>{data.shipmentHistory.map((detail) => {
        return <h3>{detail.shipmentIsDelayed}</h3>
      })}</td>
    </tr>
  </table> 
  );
}

export default App;
