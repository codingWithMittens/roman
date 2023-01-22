import React, { useState } from 'react';
import './App.css';
import { dec2roman, roman2dec } from './roman';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const matchesRoman = inputValue.match(/[IVXLCDM]+/i);
  const matchesDec = inputValue.match(/[0-9]+/);
  const isRoman = matchesRoman && matchesRoman[0].length === inputValue.length;
  const isDec = matchesDec && matchesDec[0].length === inputValue.length && parseInt(inputValue) < 4000;
  const isValid = isRoman || isDec;

  return (
    <div className="App">
      <body>
        <h2 className="header">Enter a Roman Numeral or Decimal to translate</h2>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        { isValid ? (
          <>
            <h2>Result</h2>
            { isRoman ?  roman2dec(inputValue) : dec2roman(inputValue) }
          </>
        ) : (
          inputValue.length ? (<div>
            <h2 className="invalid">Invalid input</h2>
            <div className="invalidReasons">
                Must be
                <li><em>Either:</em> All valid Roman Numerals (IVXLCDM)</li>
                <li><em>Or:</em> All valid Decimals (1234567890)</li>
                <li>Less than 4000</li>
            </div>
          </div>
          ) : null
        )}
      </body>
    </div>
  );
}

export default App;
