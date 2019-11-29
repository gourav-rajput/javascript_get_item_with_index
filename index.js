

/**
 * [ifArray to check for the passed argument is Array or not]
 * @param  {[type]} data [any type of primitive, non primitive value]
 * @return {[type]}     [Return boolean on basis of checking the type of value passed as an argument]
 */
const ifArray = data => {
  return (data 
    && Array.isArray(data) 
    && data instanceof Array
  );
};

/**
 * [ifFunction to check for the passed argument is function or not]
 * @param  {[type]} ele [any type of primitive, non primitive value]
 * @return {[type]}     [Return boolean on basis of checking the type of value passed as an argument]
 */
const ifFunction = ele => {
  return ele && typeof ele === "function"
};

/**
 * [someFunction function to pass an argument to HOF]
 * @param  {[type]} obj [current object which is in iteration passed from the HOF]
 * @return {[type]}     [Return boolean]
 */
const someFunction = ele => {
  return ele.someId === "2434";
};

/**
 * [findIndexAndItem get the item object and the index value at which it is present in the Array]
 * @param  {[type]} data [Array of received from the user]
 * @param  {[type]} fun [Function to check for the each iterating element to check for the requirement test to pass]
 * @return {[type]}     [Return an object with key obj for the element which fun returns true, empty object in false case and index key for the 
                          index of the element, undefined in false case]
 */
const findIndexAndItem = (data = [], fun) => {
  let obj = {};
  let matchedIndex;
  if(ifArray(data) && ifFunction(fun)) {
    const dataLength = data.length;
    for(let i = 0; i < dataLength; i++) {
      if (fun(data[i])) {
        obj = data[i];
        matchedIndex = i;
        break;
      }
    }
  }
  return {
    obj,
    index: matchedIndex,
  }
};

// Dummy Array
let dummyData = [
  { someId: "123" },
  { someId: "23" },
  { someId: "234" },
  { someId: "2344" }
];

// Function Call
const { obj, index } = findIndexAndItem(dummyData, someFunction); 