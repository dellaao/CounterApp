import { useState } from "react";
// import './Counter.css'; 
import './Counter_function.css';

function Counter_function(){
    const [count, setCount] = useState(0);
    return(
        <div className="container">
            <h2>Counter App</h2>
            <h3 className="func">(Function)</h3>
            <h1>{count}</h1>
            <div className="buttons">
                <button className="increment" onClick={() => setCount(count + 1)}> Increment </button>
                <button className="decrement" onClick={() => setCount(count - 1)}> Decrement </button>
            </div>
        </div>
    );
}

export {Counter_function};