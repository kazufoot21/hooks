import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import ItemList from './components/itemList/ItemList';

function App() {
  const [isDisplay, setIsDisplay] = useState(true);
  const handleDisplay = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <div className="App">
      <h2>useEffect</h2>
      {/* <button onClick={() => handleDisplay()}>
        {isDisplay ? 'component not show' : 'show component'}
      </button> */}
      {/* {isDisplay && <Counter />} */}
      <ItemList />
    </div>
  );
}

export default App;
