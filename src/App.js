import React, { useState } from 'react';

import './App.css';

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const op = ['+', '-', '/', '*', '=', 'ac', '.'];

const App = () => {
  const [lastPressed, setLastPressed] = useState(undefined);
  const [currentNumber, setCurrentNumber] = useState(undefined);
  const [prevNumber, setPrevNumber] = useState(undefined);
  const [operation, setOperation] = useState(undefined);

  const handleClick = (e) => {
    const { innerText } = e.target;

    if (!Number.isNaN(Number(innerText))) {
      if (currentNumber === '0') {
        setCurrentNumber(innerText);
      } else {
        setCurrentNumber(currentNumber + innerText);
      }
    }
    switch (innerText) {
      case 'AC':
        setCurrentNumber('0');
        setPrevNumber(undefined);
        break;
      case '.':
        if (!currentNumber.includes('.')) {
          setCurrentNumber(currentNumber + innerText);
        }
        break;
      default: {
        if (!operation) {
          setOperation(innerText);
          setPrevNumber(currentNumber);
          setCurrentNumber('0');
        } else {
          setOperation(innerText);
        }
        break;
      }
    }
  };
  return (
    <div className="calculator">
      <div className="displayContainer">
        <div className="calc">{prevNumber}</div>
        <div id="display" className="current">
          {currentNumber}
        </div>
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClick} className="AC operator">
          AC
        </button>
        <button id="divide" onClick={handleClick} className="divide operator">
          /
        </button>
        <button id="multiply" onClick={handleClick} className="multiply operator">
          *
        </button>
        <button id="subtract" onClick={handleClick} className="minus operator">
          -
        </button>
        <button id="seven" onClick={handleClick} className="seven digit">
          7
        </button>
        <button id="eight" onClick={handleClick} className="eight digit">
          8
        </button>
        <button id="nine" onClick={handleClick} className="nine digit">
          9
        </button>
        <button id="add" onClick={handleClick} className="plus operator">
          +
        </button>
        <button id="four" onClick={handleClick} className="four digit">
          4
        </button>
        <button id="five" onClick={handleClick} className="five digit">
          5
        </button>
        <button id="six" onClick={handleClick} className="six digit">
          6
        </button>
        <button id="one" onClick={handleClick} className="one digit">
          1
        </button>
        <button id="two" onClick={handleClick} className="two digit">
          2
        </button>
        <button id="three" onClick={handleClick} className="three digit">
          3
        </button>
        <button id="zero" onClick={handleClick} className="itemzero digit">
          0
        </button>
        <button id="decimal" onClick={handleClick} className="dot digit">
          .
        </button>
        <button id="equals" onClick={handleClick} className="equal operator">
          =
        </button>
      </div>
    </div>
  );
};

export default App;
