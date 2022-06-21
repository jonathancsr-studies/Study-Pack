import {useEffect,useState} from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name: "Name field",
    });
    connection?.init("");
  }, [])

  useEffect(() => {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
      name: "Name field",
    });
    connection?.init("");
  }, [])

  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
      </input>
      <span>{name}</span>
    </div>
  );
}

export default App;
