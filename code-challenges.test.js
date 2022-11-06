// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// const object1 = { number: 15 }
// // Expected output: "15 is divisible by three"
// const object2 = { number: 0 }
// // Expected output: "0 is divisible by three"
// const object3 = { number: -7 }
// // Expected output: "-7 is not divisible by three"

describe("divisibleBy", () => {
    it("returns whether the number is evenly divisible by three or not", () => {
    const object1 = { number: 15 }
    const object1Output = "15 is divisible by three"
    const object2 = { number: 0 }
    const object2Output = "0 is divisible by three"
    const object3 = { number: -7 }
    const object3Output = "-7 is not divisible by three"
      expect(divisibleBy(object1)).toEqual(object1Output)
      expect(divisibleBy(object2)).toEqual(object2Output)
      expect(divisibleBy(object3)).toEqual(object3Output)
    })
  })

// ReferenceError: divisibleBy is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// This is a good error. Jest needs the function declaration and logic in order to call the function. If the function works properly, the test should pass. We can now proceed to creating the function.


// b) Create the function that makes the test pass.

// Input: an object with a number
// Output: a string telling us whether that number is divisible by 3 or not.

// 1. First declare a function called divisibleBy.
// 2. Pass in an object as the parameter.
// 3. Create a conditional statement.
  // If the number passed is divisible by 3, return (number) is divisible by three.
  // Otherwise, return (number) is not divisible by three.
  // Use template literals to return the stringed statements with the numbers passed.
// No need to invoke the function or console.log because this is a test file and Jest will handle all of that by the test code we made above.
// 4. Run yard jest to see whether tests have passed.
  // If all goes well, we should see green passes for our tests.

  const divisibleBy = (object) => {
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
    } else {
        return `${object.number} is not divisible by three`
    }
  }

// I keep getting a fail.
// divisibleBy › whether the number is evenly divisible by three or not

    // expect(received).toEqual(expected) // deep equality

    //Expected: "15 is divisible by three"
    //Received: "undefined is not divisible by three"


// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// I really do not know why Jest cannot access the object. I believe that is why it is saying undefined.

// The logic seems to be right. I just do not get Jest enough at this point to see what I went wrong with setting up the Jest code. I have spent more than an hour and a half on this. I will try the next problem for now and come back to it.


// YESSSSS FINALLY
// PASS  ./code-challenges.test.js
//   divisibleBy
//     ✓ whether the number is evenly divisible by three or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// I was passing in object.number as an argument in the expect statements in the Jest code. It kept giving me an undefined. It was not necessary to extract the number out of the object (object.number). All Jest needed was the object itself. That was of course after I had put the objects in the code block and made variables for the outputs and then plugged in those variable outputs after the .toEqual. Initially, I had copied the string of the output into .toEqual. I really thought Jest was going to be a pain, and it was. However, it is so satisfying to get the green tests passed in the terminal. I GET IT. Testing can be rewarding in itself. I am just impatient and would rather test out my ideas by writing the logic first. It will take some time to get used to first testing, then pseudocoding, and then writing logic, but it will be key in the prevention of bugs in future when I am dealing with a huge project with thousands of lines of code and several files. It was just difficult to see the benefit when writing out only a simple function.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalized", () => {
    it("returns an array with all the words capitalized", () => {
      const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
      const randomNouns1Output = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
      const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
      const randomNouns2Output = ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(capitalized(randomNouns1)).toEqual(randomNouns1Output)
      expect(capitalized(randomNouns2)).toEqual(randomNouns2Output)
    })
  })

// Received the good fail.

// ReferenceError: capitalized is not defined

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total


// b) Create the function that makes the test pass.

// Input: array of strings lowercased
// Output: same number of strings in an array with first letter capitalized.

  // 1. Create a high order function named capitalized.
  // 2. Pass in array as the parameter.
  // 3. Since we want to receive the same number of elements in the array as when we started out, use the .map() method to map over the elements of the array.
  // 4. Return and pass in a value as the parameter in the .map() method.
  // 5. Get the first index/letter of every word and upcase it using the upcase method.
  // 6. Since all we have now is uppercased first letters of the words in the array. We need to add those capitalized letters to the rest of the word. We can achieve this by using the substring method and passing in the number 1 to get everything after the 0 index.
  // 7. Add them both together in the return statment.
  // 8. Run yarn jest to hopefully see tests passed.

  const capitalized = (array) => {
    return array.map((value) => {
        return value[0].toUpperCase() + value.substring(1)
    })
  }

  // PASS
  // capitalized
  //   ✓ returns an array with all the words capitalized
  
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// const vowelTester1 = "learn"
// // Expected output: 1
// const vowelTester2 = "academy"
// // Expected output: 0
// const vowelTester3 = "challenges"
// // Expected output: 2


describe("firstVowel", () => {
  it("logs the index of the first vowel", () => {
    const vowelTester1 = "learn"
    const vowelTester1Output = 1
    const vowelTester2 = "academy"
    const vowelTester2Output = 0
    const vowelTester3 = "challenges"
    const vowelTester3Output = 2
    expect(firstVowel(vowelTester1)).toEqual(vowelTester1Output)
    expect(firstVowel(vowelTester2)).toEqual(vowelTester2Output)
    expect(firstVowel(vowelTester3)).toEqual(vowelTester3Output)
  })
})

// ReferenceError: firstVowel is not defined

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total


// b) Create the function that makes the test pass.

// Input: A string. More specifically, a word/set of characters consisting of both consonants and vowels.
// Output: The index of the first occurance of a vowel in the string passed.

// 1. Create a function named firstVowel.
// 2. Pass in string as the parameter.
// 3. Find a method whereby you match the characters of specific string.
  // We can use the string method .match() to find a match of the vowels in the string.
// 4. Declare a new variable equal to the parameter string. Specify with the .match() method what characters we want it to match with. In this case we will pass vowel characters.
// 5. Find a method whereby you can find the index of a given characer.
  // We can use the .indexOf() method to find the first index of those vowel characters by passing the new variable we made to store the matched vowel characters.
// 6. Run yarn jest again to test code.

const firstVowel = (string) => {
  const firstOne = string.match('["a", "e", "i", "o", "u"]')
  return string.indexOf(firstOne)
}

// PASS
// firstVowel
//     ✓ logs the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// Thank you, Elyse for your time in office hours showing us the process of using testing to come up with a coding solution. I am sorry if my frustration in understanding the importance of testing and difficulty in implementing Jest came off the wrong way. I do appreaciate your patience in teaching us newbs. You are an excellent instructor.