import { useState } from "react";
function Button(props){
  return (
    <button onClick={ () => props.onClickFunction(props.message)}>
        +{props.message}
    </button>
  )
}
function Contador() {
  const [counter, setCounter] = useState(0)
  const handleClick = (increment) => setCounter(counter+increment)
  return (
    <div>
      <Button onClickFunction = {handleClick} message = {1}/>
      <Button onClickFunction = {handleClick} message = {5}/>
      <Button onClickFunction = {handleClick} message = {10}/>
      <Button onClickFunction = {handleClick} message = {15}/>
      <div>{counter}</div>
    </div>
  ) 
}
export default Contador;