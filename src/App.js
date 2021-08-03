import React, { useState } from 'react';

import './App.css';

const ops = ['/', '*', '-', '+'];

const App = () => {
  const [calc, setCalc] = useState('0');
  const [operation, setOperation] = useState(undefined);
  const [lastPressed, setLastpressed] = useState(undefined);

  const handleClick = (e) => {
    const { innerText } = e.target;

    switch (innerText) {
      case 'AC': {
        setCalc('0');
        break;
      }

      case '=': {
        const evaluated = eval(calc);
        setCalc(evaluated);
        break;
      }
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];

        if (!last.includes('.')) {
          setCalc(calc + '.');
        }

        break;
      }
      default: {
        let e = undefined;
        if (ops.includes(innerText)) {
          if (ops.includes(lastPressed && innerText !== '-')) {
            e = calc.slice(0, -3) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = calc === '0' ? innerText : calc + innerText;
        }
        setCalc(e);
      }
    }
    setLastpressed(innerText);
  };
  return (
    <div className="calculator">
      <div className="displayContainer">
        <div className="calc"></div>
        <div id="display" className="current">
          {calc}
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
