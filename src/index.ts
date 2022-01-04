/*
* This program is the binary search program.
*
* @author  Malcolm Tompkins
* @version 1.0
* @since   2021-12-30
*/

import * as readline from 'readline'

function compareNumbers (a: number, b: number) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  return a - b
}

function getRandomInt (min: number, max: number) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function binarySearch (array: number[], searchNum: number,
  lowIndex: number, highIndex: number) {
  // this function is a binary search engine.
  if (lowIndex > highIndex) {
    return -1
  } else {
    const medium: number = Math.round((highIndex + lowIndex) / 2)
    let returnValue: number
    if (array[medium] > searchNum) {
      returnValue = binarySearch(array, searchNum,
        lowIndex, medium - 1)
      return returnValue
    } else if (array[medium] < searchNum) {
      returnValue = binarySearch(array, searchNum,
        medium + 1, highIndex)
      return returnValue
    } else {
      return medium
    }
  }
}

const generatedNum :number[] = new Array(250)

for (let i: number = 0; i < generatedNum.length; i++) {
  generatedNum[i] = getRandomInt(0, 1000)
}

generatedNum.sort(compareNumbers)

console.log(generatedNum)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
try {
  rl.question(
    'What number are you searching for in the array (integer between 0 and 999): '
    , function (input) {
      const answer: number = binarySearch(generatedNum, parseInt(input), 0, 250)
      if (answer === -1) {
        console.log('The number is not present in the array.')
      } else {
        console.log('The number is present at index ' + answer + '.')
      }
      rl.close()
      console.log('\nDone.')
    })
} catch (exeption) {
  console.log('please insert an integer.')
}
