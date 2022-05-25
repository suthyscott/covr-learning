import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField } from './TextField'
import {Counter} from './Counter'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TextField text='hello' person={{lastName: '', firstName: ''}} 
      handleChange={e => {
        e.preventDefault()
      }} /> */}
      <Counter>
        {(count, setCount) => (<div>{count}<button onClick={() => setCount(count + 1)}>+</button></div>)}
      </Counter>
    </div>
  );
}

export default App;
