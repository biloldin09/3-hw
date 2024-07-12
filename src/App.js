import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const [name, setName] = useState('');
  const names = useSelector(state => state);
  const dispatch = useDispatch();

  const addName = () => {
    if (name.trim() !== '') {
      dispatch({ type: 'ADD_NAME', payload: name });
      setName('');
    }
  };

  return (
    <div>
      <h1>Names</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="write the name"
      />
      <button onClick={addName}>add name</button>
      <ul>
        {names.map((name, index) => (
          <h1 key={index}>{name}</h1>
        ))}
      </ul>
    </div>
  );
}

export default App;