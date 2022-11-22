import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App2() {
  // setup state
  const [cryptid, setCryptid] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [stat, setStat] = useState();

  const fetchCryptid = async() => {
    try {      
      const response = await axios.get("/api/cryptid");
      setCryptid(response.data);
    } catch(error) {
      setError("error retrieving cryptid: " + error);
    }
  }
  const createCryptid = async() => {
    try {
      await axios.post("/api/cryptid", {name: name, describe: describe, stat: stat});
    } catch(error) {
      setError("error adding your cryptid to our registry: " + error);
    }
  }
  const deleteACryptid = async(cryptid) => {
    try {
      await axios.delete("/api/cryptid/" + cryptid.id);
    } catch(error) {
      setError("error removing your cryptid from our registry: " + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchCryptid();
  },[]);

  const addCryptid = async(e) => {
    e.preventDefault();
    await createCryptid();
    fetchCryptid();
    setName("");
    setDescribe("");
    setStat();
  }

  const deleteCryptid = async(cryptid) => {
    await deleteACryptid(cryptid);
    fetchCryptid();
  }

  // render results
  return (
    <div className="App">
      {error}
      <h1>Registering A Cryptid</h1>
      <form onSubmit={addCryptid}>
        <div>
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea value={describe} onChange={e=>setDescribe(e.target.value)}></textarea>
          </label>
        </div>
        <div>
          <label>
            Stat:
            <textarea value={stat} onChange={e=>setStat(e.target.value)}></textarea>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h1>Cryptids</h1>
      {cryptid.map( ticket => (
        <div key={cryptid.id} className="cryptid">
          <div className="description">
            <p>{cryptid.describe}</p>
            <p><i>-- {cryptid.name}</i></p>
            <p><i> *** {cryptid.stats} *** </i></p>
          </div>
          <button onClick={e => deleteCryptid(cryptid)}>Delete</button>
        </div>
      ))}     
    </div>
  );
}

export default App2;
