import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter_function} from './Counter_function';
import { Counter_class } from './Counter_class';

function App() {

  let [isToggleOn, setState] = useState(true);

  return (
    <div className="buttontoggle">
      <button className="toggle" onClick={() => setState(!isToggleOn)}>
        {isToggleOn ? 'Counter (Function) ' : ' Counter (Class) '}
      </button>
      <div>
        {isToggleOn ? <Counter_function /> : <Counter_class />}
      </div>
    </div>
  );
} 

export default App;
