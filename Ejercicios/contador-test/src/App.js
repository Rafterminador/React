import { useState } from "react";

function Contador() {
  const [counter, setCounter] = useState(0)
  return <button onClick={() => setCounter(counter+1)}>{counter}</button>
}

export default Contador;
