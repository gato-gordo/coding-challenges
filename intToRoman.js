/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanKey = [
        {
            symbol: 'M',
            value: 1000,
        },
        {
            symbol: 'D',
            value: 500,
        },
        {
            symbol: 'C',
            value: 100,
        },
        {
            symbol: 'L',
            value: 50,
        },
        {
            symbol: 'X',
            value: 10,
        },
        {
            symbol: 'V',
            value: 5,
        },
        {
            symbol: 'I',
            value: 1,
        }
    ];
    const romanNumeral = []; // Build in array for fast push
    let pointer = 0;
    let remainder = num;
    while (remainder > 0) {
        const { value: curValue, symbol: curSymbol } = romanKey[pointer];
        let subCount = 0;
        while (remainder >= curValue) {
            remainder -= curValue;
            subCount++;
        }
        if (subCount === 4) { // Check for 4
            const { symbol: prevSymbol } = romanKey[pointer - 1];
            romanNumeral.push(curSymbol + prevSymbol);
            continue;
        }
        if (subCount === 1 && pointer %2 !== 0) { // Check for 9
            const { value: nextValue, symbol: nextSymbol } = romanKey[pointer + 1];
            if (curValue - remainder <= nextValue) {
                const { symbol: prevSymbol } = romanKey[pointer - 1];
                romanNumeral.push(nextSymbol + prevSymbol);
                remainder -= (4 * nextValue);
                continue;
            }
        }
        for (let i = 0; i < subCount; i++) {
            romanNumeral.push(curSymbol);
        }
        pointer++;
    }
    return romanNumeral.join('');
};