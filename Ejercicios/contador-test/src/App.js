import { useState } from "react";
function Contador() {
  const [counter, setCounter] = useState(0)
  const handleClick = () => setCounter(counter+1)
  return (
    <div>
      <button onClick={handleClick}>
        +1
      </button>
      <div>{counter+1}</div>
    </div>
  ) 
}
export default Contador;