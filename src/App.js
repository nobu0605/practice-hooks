import React, { useState, useEffect, createContext, useContext } from 'react';
const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function Child1() {
    return <Child3 />;
  }

  function Child2() {
    return <h2>Not Consumer</h2>;
  }

  function Child3() {
    const name = useContext(MyContext);

    return <h1>{name}</h1>;
  }

  useEffect(() => {
    document.title = `${count}回クリックされました`;
    setNumber(number + 1);
  }, [count]);
  const name = 'Consumer';

  return (
    <div>
      <span>{document.title}</span>
      {number}
      <button onClick={() => setCount((prev) => prev + 1)}>+ Add</button>
      <MyContext.Provider value={name}>
        <Child1 />
        <Child2 />
      </MyContext.Provider>
    </div>
  );
}

export default App;
