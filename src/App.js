import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState("");
 
  function reset(){
    setValue("");
  };
  return (
    <div>
    <div className='screen'>
    <input type='text' className='display' value={value}/>
    </div>
    <div className="container">  
      <div className='calculator_nums'>
        <input type='button' className='btn_nums' value={1} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={2} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={3} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={4} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={5} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={6} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={7} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={8} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={9} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={0} onClick={e => setValue(value+e.target.value)}/>
      </div>

      <div className='operation_container'>
      <input type='button' className='btn_nums' value={"+"} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={"-"} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={"*"} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={"/"} onClick={e => setValue(value+e.target.value)}/>
        <input type='button' className='btn_nums' value={"="} onClick={e => setValue(value+"="+eval(value))}/>
        <input type='button' className='btn_nums' value={"C"} onClick={reset}/>

      </div>
    </div>
    </div>
  );
}

export default App;
