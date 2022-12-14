'use strict';

// const { index } = require("cheerio/lib/api/traversing");   >>>> what's this??

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function that iterates over an array of people objects
and creates a new list of each person's full name using the array method 'map'.
Each object will have the shape {firstName:string, lastName:string}
E.g. [ { firstName:"Jane", lastName:"Doe" }, { firstName:"James", lastName:"Bond"}]
should convert to ["Jane Doe", "James Bond"]
Note the space in between first and last names.
You can assume that neither firstName nor lastName will be blank
------------------------------------------------------------------------------------------------ */

// map() from MDN Docs
const toLastNames = people => {
  // using map() to iterate through the array elements
  let name = people.map(element => `${element.firstName} ${element.lastName}`);
  return name;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.

------------------------------------------------------------------------------------------------ */

// reduce() from MDN Docs
const addValues = (arr) => {
  // using reduce() to iterate through the array values
  let numArr = arr.reduce((total, curVal) => {
    total = total + curVal;
    return total;
  }, 0);
  return numArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named addPurchases that, given an array of objects as input, uses reduce to find the total amount purchased. Each object contains the keys `item` and `purchasePrice` like the example.

{
  item: 'switch'
  purchasePrice: 399
}

------------------------------------------------------------------------------------------------ */

// reduce() from MDN Docs
const addPurchases = (arr) => {
  // using reduce() to iterate through the array values
  let totalPrice = arr.reduce((total, curVal) => {
    total = total + curVal.purchasePrice;
    return total;
  }, 0);
  return totalPrice;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named countNumberOfElements that, given an array as input, uses reduce to count the number of elements in the array.

Note: You may not use the array's built-in length property.
------------------------------------------------------------------------------------------------ */


// >>> countNumberOfElements([1, 2, 3, 4, 5]) <<<

// reduce() from MDN Docs
const countNumberOfElements = (arr) => {
  // using reduce() to iterate through the array values
  let numOfElements = arr.reduce((arrLength) => arrLength + 1, 0);
  return numOfElements;
};


// >>>>>>> more lines, works same <<<<<<<

// reduce() from MDN Docs
// const countNumberOfElements = (arr) => {
//   // using reduce() to iterate through the array values
//   let numOfElements = arr.reduce((arrLength) => {
//     arrLength = arrLength + 1;
//     return arrLength;
//   }, 0);
//   return numOfElements;
// };

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];


/* expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]); */


// reduce() from MDN Docs
const returnNames = (arr) => {
  let newArr = arr.reduce((names, curName) => {
    if (curName.name) names.push(curName.name);
    return names;
  }, []);
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

Write a function named reversedString that takes in a string and returns a string with the letters in reverse order.

Note: You must use reduce for this challenge. You may not use the built-in .reverse() string method.
------------------------------------------------------------------------------------------------ */


// expect(reversedString('Code 301')).toStrictEqual('103 edoC');


// reduce() from MDN Docs
const reversedString = (str) => {
  // create an array and assigned it the split value of string
  const arr = str.split('');
  // using reduce() to iterate through the array values
  let newStr = arr.reduce((reverseWord, letter) => {
    return letter + reverseWord;
  }, '');
  return newStr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named countNumberOfChildren that, given the array of characters, below, uses reduce to return the total number of children in the data set.
------------------------------------------------------------------------------------------------ */

const characters = [
  {
    name: 'Eddard',
    spouse: 'Catelyn',
    children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: 'Lysa',
    children: ['Robin'],
    house: 'Arryn',
  },
  {
    name: 'Cersei',
    spouse: 'Robert',
    children: ['Joffrey', 'Myrcella', 'Tommen'],
    house: 'Lannister',
  },
  {
    name: 'Daenarys',
    spouse: 'Khal Drogo',
    children: ['Drogon', 'Rhaegal', 'Viserion'],
    house: 'Targaryen',
  },
  {
    name: 'Mace',
    spouse: 'Alerie',
    children: ['Margaery', 'Loras'],
    house: 'Tyrell',
  },
  {
    name: 'Sansa',
    spouse: 'Tyrion',
    house: 'Stark',
  },
  {
    name: 'Jon',
    spouse: null,
    house: 'Snow',
  },
];


// reduce() from MDN Docs
const countNumberOfChildren = (arr) => {
  // using reduce() to iterate through the array values
  let childrenNum = arr.reduce((total, curNum) => {
    if (curNum.children) total = total + curNum.children.length;
    return total;
  }, 0);
  return childrenNum;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses reduce to calculate the array's average value.

Hint: The accumulator should begin as { count: 0, sum: 0 }
------------------------------------------------------------------------------------------------ */


// reduce() from MDN Docs
const calculateAverage = (arr) => {
  // declare variable that will hold the avergae value
  let avg = 0;
  // using reduce() to iterate through the array values
  let average = arr.reduce((sum, count) => {
    sum = sum + count;
    return sum;
  }, 0);
  avg = (Math.floor(average / arr.length));
  return Math.floor(avg);
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named countPrimeNumbers that, given an array elements as input, uses reduce to count the number of elements that are prime numbers.

You are welcome to use the provided isPrime function.
------------------------------------------------------------------------------------------------ */



// countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);


const isPrime = (value) => {
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return value > 1;
};


// reduce() from MDN Docs
const countPrimeNumbers = (arr) => {
  // using reduce() to iterate through the array values
  let primeCount = arr.reduce((count, curNum) => {
    if (isPrime(curNum)) count++;
    return count;
  }, 0);
  return primeCount;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named extractState that, given the snorlaxData, below, uses reduce to return the object whose 'name' property matches the given string.

If the input array does not have a stat with that specific name, the function should return null.
------------------------------------------------------------------------------------------------ */

const snorlaxData = {
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed',
      },
      effort: 5,
      baseStat: 30,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense',
      },
      effort: 2,
      baseStat: 110,
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack',
      },
      effort: 9,
      baseStat: 65,
    },
  ],
  name: 'snorlax',
  weight: 4600,
};

// reduce() from MDN Docs
const extractStat = (statName, arr) => {
  // using reduce() to iterate through the array values
  let name = arr.reduce((statName, curName) => {
    if (curName.stat.name === statName) statName = curName.stat.name;
    return statName;
    // else return null;
  }, {});
  console.log(name);
  return name;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named extractChildren that, given the array of characters from challenge 4, accomplishes the following:

1) Uses filter to return an array of the characters that contain the letter 'a' in their name

2) Then, uses reduce to return an array of all the children's names in the filtered array
------------------------------------------------------------------------------------------------ */


// expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);

// reduce() and filter() from MDN Docs
const extractChildren = (arr) => {
  // using filter() to iterate through the array values
  let filteredArray = arr.filter(element => element.children.includes('a'));
  console.log(filteredArray);
  // using reduce() to iterate through the array values
  let newArr = filteredArray.reduce((charName, curName) => {
    if (curName.children) charName.push(curName.children);
    return charName;
  }, []);
  return newArr;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-09.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should convert object to full name string', () => {

    const people = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];

    expect(toLastNames(people)).toStrictEqual(['Jane Doe', 'James Bond']);

  });
});

describe('Testing challenge 2', () => {
  test('It should add the values of an array', () => {
    expect(addValues([1, 2, 3, 4, 5])).toStrictEqual(15);
    expect(addValues([])).toStrictEqual(0);
    expect(addValues([1, 2, 3, 4, -5])).toStrictEqual(5);
  });
});

describe('Testing challenge 3', () => {
  test('It should add the purchase price', () => {
    expect(addPurchases([{item: 'switch', purchasePrice: 399}, {item: 'toothpaste', purchasePrice: 2}])).toStrictEqual(401);
    expect(addPurchases([])).toStrictEqual(0);
  });
});

describe('Testing challenge 4', () => {
  test('It should return the length of the array', () => {
    expect(countNumberOfElements([1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array continaing the names of the characters', () => {
    expect(returnNames(starWarsData)).toStrictEqual([ 'Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa' ]);
    expect(returnNames(starWarsData).length).toStrictEqual(5);
  });
});

describe('Testing challenge 6', () => {
  test('It should return the string with the characters in reverse order', () => {
    expect(reversedString('Code 301')).toStrictEqual('103 edoC');
  });
});

describe('Testing challenge 7', () => {
  test('It should return the total number of children', () => {
    expect(countNumberOfChildren(characters)).toStrictEqual(14);
  });
});

describe('Testing challenge 8', () => {
  test('It should return the average of the numbers in the array', () => {
    expect(calculateAverage([18, 290, 37, 4, 55, 16, 7, 85 ])).toStrictEqual(64);
  });
});

describe('Testing challenge 9', () => {
  test('It should return a count of the prime numbers in the array', () => {
    expect(countPrimeNumbers([1, 2, 13, 64, 45, 56, 17, 8])).toStrictEqual(3);
  });
});

xdescribe('Testing challenge 10', () => {
  test('It should return any stats that match the input', () => {
    expect(extractStat('speed', snorlaxData.stats)).toStrictEqual({ stat: { url: 'https://pokeapi.co/api/v2/stat/6/', name: 'speed' }, effort: 5, baseStat: 30 });
  });
});

xdescribe('Testing challenge 11', () => {
  test('It should return an array containing the names of the children', () => {
    expect(extractChildren(characters)).toStrictEqual([ 'Robb', 'Sansa', 'Arya', 'Bran', 'Rickon', 'Drogon', 'Rhaegal', 'Viserion', 'Margaery', 'Loras' ]);
    expect(extractChildren(characters).length).toStrictEqual(10);
  });
});
