import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState("");
 
  function reset(){
    setValue("");
  };
  function calculate() {
    const operators = [];
    const numbers = [];
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    const tokens = value.match(/(\d+|[+\-*/])/g);
  
    tokens.forEach(token => {
      if (!isNaN(token)) {
        numbers.push(parseFloat(token));
      } else if (token in precedence) {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          const operator = operators.pop();
          const num2 = numbers.pop();
          const num1 = numbers.pop();
          if (operator === '+') {
            numbers.push(num1 + num2);
          } else if (operator === '-') {
            numbers.push(num1 - num2);
          } else if (operator === '*') {
            numbers.push(num1 * num2);
          } else if (operator === '/') {
            numbers.push(num1 / num2);
          }
        }
        operators.push(token);
      }
    });
  
    while (operators.length > 0) {
      const operator = operators.pop();
      const num2 = numbers.pop();
      const num1 = numbers.pop();
      if (operator === '+') {
        numbers.push(num1 + num2);
      } else if (operator === '-') {
        numbers.push(num1 - num2);
      } else if (operator === '*') {
        numbers.push(num1 * num2);
      } else if (operator === '/') {
        numbers.push(num1 / num2);
      }
    }
    setValue(numbers[0]);
  }
  
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
        <input type='button' className='btn_nums' value={"="} onClick={calculate}/>
        <input type='button' className='btn_nums' value={"C"} onClick={reset}/>

      </div>
    </div>
    </div>
  );
}

export default App;
