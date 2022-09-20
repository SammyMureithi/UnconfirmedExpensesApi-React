import { useState } from 'react';
import './App.css';
import UnconfirmedExpenses from './Components.js/UnconfirmedExpenses';

function App() {
  const [startWith, setStartWith] = useState();
  function handleChange( e ) {
    const newValue = e.target.value;
    setStartWith( newValue[0] );
  }
  return (
    <div className="App">
      <label htmlFor='startWith'>Drinks StartWith</label>
      <input type={"text"} id="startWith" name='startWith' onChange={handleChange}
        value={startWith} placeholder="[A-Z]" />
      <UnconfirmedExpenses searchTerm={startWith} />
    </div>
  );
}

export default App;
