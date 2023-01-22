const numerals = ['I','V','X','L','C','D','M'];

export const roman2dec = (roman) => {
  const symbols = roman.split('');
  let decimal = 0;
  const numValue = (position) => (
    (position + 1)%2 === 1 ? 10 ** (position / 2) : (10 ** (Math.floor(position / 2) + 1)) / 2
  );

  symbols.forEach((symbol, pos) => {
    const charValue = numValue(numerals.indexOf(symbol.toUpperCase()));
    const isNegative = numerals.indexOf(symbols[pos + 1]) <= numerals.indexOf(symbols[pos]);
    isNegative ? decimal += charValue : decimal -= charValue;
  });

  return decimal;
}

const getRomanForPlace = (magnitude, digit) => {
  const baseIndex = (magnitude - 1) * 2;
  const roman = [];

  if (digit <= 3) {
    roman.push(numerals[baseIndex].repeat(parseInt(digit)));
  }
  if (digit === 4) {
    roman.push(numerals[baseIndex]);
    roman.push(numerals[baseIndex + 1]);
  }
  if (digit > 4 && digit < 9) {
    roman.push(numerals[baseIndex + 1]);
    [...Array(digit - 5)].forEach(e => roman.push(numerals[baseIndex]));
  }
  if (digit === 9) {
    roman.push(numerals[baseIndex]);
    roman.push(numerals[baseIndex + 2]);
  }

  return roman.join('');
}

export const dec2roman = (decimal) => {
  if (parseInt(decimal) > 3999) {
    return
  }

  const decArry = decimal.toString().split('');

  return decArry.map((strDigit, index) => {
    const magnitude = decArry.length - index;
    const digit = parseInt(strDigit);

    return getRomanForPlace(magnitude, digit);
  }).join('')
}
