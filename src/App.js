import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const listItems = data.map((item, index) => (
    <tr key={index}>
      <td>{item.name.common}</td>
      <td>{item.capital && item.capital[0]}</td>
      <td>
        {item.currencies &&
          item.currencies[Object.keys(item.currencies)[0]].name}
      </td>
      <td>{item.population}</td>
    </tr>
  ));

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Country Name</th>
            <th>Captial</th>
            <th>Currency</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
}

export default App;
