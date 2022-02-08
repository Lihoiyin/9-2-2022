const maxOfTwoNumbers = (x, y) => {
  if (x> y){
    return x
  }
    return y
}
console.log(maxOfTwoNumbers(1,2))

const maxOfThree = (x, y, z) => {
  if (x> y && x>z){
    return x
  } else if (y > z){
    return y
  }
  return z
}
console.log(maxOfThree(3,4,5))

//1. we can use array['a', 'e', 'i', 'o', 'u']and for or array.include()
const isCharacterAVowel = (x) =>{
  if (typeof(x) === "string" && x.length ===1){
    let target = x.toLowerCase()
    switch (target) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return "this is a vowel"
        break;
      default:
        return "this is not a vowel"
        break;}
    }
        return "this is not a character"

}
console.log(isCharacterAVowel('a'))
console.log(isCharacterAVowel('B'))
console.log(isCharacterAVowel(23))

const sumArray = (arg)=> {
  let x = 0;
  arg.forEach(z => x+=z)
  return x
}
console.log(sumArray([1,2,3,4]))

const multiplyArray  = (arg)=> {
  let x = 1;
  arg.forEach(z => x*=z)
  return x
}

console.log(multiplyArray ([1,2,3,4]))

//str = 'denis'
//str.split('') | ['d', 'e', 'n', 'i', 's'](turn back an array)
//str.split('').reverse() | ['s', 'e', 'n', 'i', 'd'] (reverse() is an array method)
//str..split('').reverse().join('') | senid (return a string)
const reverseString =  (target) => {
  let index = target.length -1
  let newString = ''
  for (let i= index ; i>=0; i--){
    newString += target[i]
  }
  return newString
}
console.log(reverseString("jag testar"))


const findLongestWord  = (arg) => {
  let characterNum = 0;
  arg.forEach( (word,index) =>{
    if (word.length > characterNum) {
      characterNum = word.length
    }}
  )
  return characterNum
}

let arr = ["aaaa", "aa", "aaaaa"]
console.log(findLongestWord(arr))

const filterLongWords = (i, arg) => {
  let newArr = []
  arg.forEach( word =>{
    if (word.length > i) {
      newArr.push(word);
    }}
  )
  return newArr
}

console.log(filterLongWords(4, arr))

const characterCounter = (str) => {
  let counter = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let lowerChar = char.toLowerCase();
    switch (lowerChar) {
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
      case 'n':
      case 'o':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'u':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        counter[lowerChar] = !!counter[lowerChar] ? counter[lowerChar] +1 : 1
        break;

      default:
        break;
    }
  }
  return counter

  }

console.log(characterCounter("Write a function that takes a string as argument and returns an object where the keys are the characters that occur in the string the values are the number of occurrences for each letter, regardless of the caseFor example, calling the function with the tringwill return:"));

/*
const characterCounter2 = (str) => {
  let counter = {}
  let target = str.replaceAll(' ','').replaceAll(',', '').replaceAll(':', '')
  for (let i = 0; i < str.length; i++) {
    let char = target[i];
    let lowerChar = char.toLowerCase();
    counter[lowerChar] = !!counter[lowerChar] ? counter[lowerChar] + 1 : 1
  }
  return counter
}
console.log(characterCounter2("Write a function that takes a string as argument and returns an object where the keys are the characters that occur in the string the values are the number of occurrences for each letter, regardless of the caseFor example, calling the function with the tringwill return:"));

*/
