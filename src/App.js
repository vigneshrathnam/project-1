import React, { useState, useEffect } from "react";
import Table from "./components/table"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const url = "https://reqres.in/api/users?page=2";
  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.data);
    })();
  }, []);
  const [data, setData] = useState([]);
  return (
    <div className="App">{data.length === 0 ? <>loading</> : <Table data={data}/>}</div>
  );
}

export default App;
