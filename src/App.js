import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [capital, setCapital] = useState();
  const [currency, setCurrency] = useState();
  const [population, setPopulation] = useState();
  var list = [
    {
      name: name,
      capital: capital,
      currency: currency,
      population: population,
    },
  ];

  useEffect(() => {
    const Data = () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((response) =>
          response.json().then((data, index) => {
            setData(data);
            setName(data[0].name.common);
            setCapital(data[0].capital);
            setCurrency(data[0].currencies.BBD.name);
            setPopulation(data[0].population);
          })
        )
        .catch((error) => console.log(error));
    };
    Data();
  }, [name]);
  console.log(data);
  const listItems = list.map((data) => (
    <tr>
      <td>{data.name}</td>
      <td>{data.capital}</td>
      <td>{data.currency}</td>
      <td>{data.population}</td>
    </tr>
  ));
  return (
    <div className="App">
      <table>
        <tr>
          <th>Country Name</th>
          <th>Captial</th>
          <th>currency</th>
          <th>Population</th>
        </tr>
        {listItems}
      </table>
    </div>
  );
}

export default App;
