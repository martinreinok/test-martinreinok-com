import React, { useState } from 'react'
import '../styles.css'

function getClassName(count) {
    if (count > 0) return "h1-green";
    else if (count < 0) return "h1-red";
    else return "h1-black";
}

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange,
  };
}

function Counter() {
    const [count, setCount] = useState(0);
    const inputField = useInput(1);
    if (isNaN(inputField.value) || inputField.value == "") {inputField.value = 0; }
    return(
        <div>
        <h1 className={getClassName(count)}>{count}</h1>
        <div class="math-buttons">
            <button onClick={() => setCount(parseFloat((parseFloat(count) + parseFloat(inputField.value)).toFixed(4)))} className='button-plus'>+</button>
            <button onClick={() => setCount(parseFloat((parseFloat(count) - parseFloat(inputField.value)).toFixed(4)))} className='button-minus'>-</button>
            <button onClick={() => setCount(parseFloat((parseFloat(count) / parseFloat(inputField.value)).toFixed(4)))} className='button-divide'>÷</button>
            <button onClick={() => setCount(parseFloat((parseFloat(count) * parseFloat(inputField.value)).toFixed(4)))} className='button-multiply'>×</button>
        </div>
        <div>
            <input className='input-field' {...inputField} placeholder="Type value here" />
        </div>
        </div>
    )
  }

export default Counter;