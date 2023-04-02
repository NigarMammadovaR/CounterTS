import { CounterProps } from "./model";
import { useState } from "react";

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState<number>(props.count);
  
    const increment = () =>{
        setCount( count +1 );
    }
    const decrement = () =>{
      if(count == 0){
        alert ("0-dan ashagi olmaz!!!")
      } else {
         setCount( count  - 1 );
      }
  }
  return (
    <div>
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter;