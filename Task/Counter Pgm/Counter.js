import React,{useState} from "react";

export function CounterPage(){
    let [count,setCount] = useState(0);
    function handleCounter(type=""){
     if (type === "increment"){
      setCount(count + 1); 
     }
     else{
      setCount(count - 1);
     }
     
    }

return (
    
      <div className="Counter-container">
        <h1 id="count">{count}</h1>
          <div className="cta-container">
          <button onClick={handleCounter}> -</button>
          <button onClick={() => handleCounter("increment")}>+</button>
          </div>
      </div>
    
  );
}
