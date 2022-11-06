// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.



// --------------------1) What will this log?

const cohort = "Golf 2022"
//console.log(cohort.split(""))

// a) Your answer: ["G","o","l","f","2","0","2","2"]
// b) Verify and explain:
  // The string method .split() will split all the characters in the string into individual elements and put those elements into an array. However, I was incorrect in that the new array returns single quotes AND includes the space between Golf and 2022. The space is an element as it has an actual index so it is included into the array.



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: 'Hello, LEARN Student'
// b) Verify and explain:
// I was wrong. This is more a matter of viewing the code carefully which I obviously did not. Whenever a function returns an output of undefined, the first thing you should do is to check and see whether there is a missing return statement. I can't believe I didn't look for a return statement before I ran the console log. You got me!



// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:
// I was right, but almost wrong. So I initially thought this would result in some type of error as I am used to seeing a reference to an array before the .map() method and not the actual array. But then I remembered my instructor Elyse showed us that it does not make a difference in the output whether you refer to an array or have the actual array in the function. It still works the same. The difference is that the initial array is not stored anywhere and since we are using .map(), the array becomes altered or mutated. For example, if we wanted to save the initial array, would could by writing the code below.

// let myVariable = [4, 5, 6, 7, 8]
// const multipliedByTwo = myVariable.map((number) => number * 2)
// console.log(multipliedByTwo)
// Output: [8, 10, 12, 14, 16]
// // Check and see if the initial variable stays unchanged.
// console.log(myVariable)
// Output: [4, 5, 6, 7, 8]



// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:
// I was right. As I noted above, the function will still work by putting an actual array with the .filter() method instead of referencing an array outside of the function. The .filter() method will take an array and only return the elements based on the condition you provide. In this case we are telling it for every number in the array, return to us only the numbers that are not evenly divisible by 2. This will give us odd numbers.



// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: 'Javascript'
// b) Verify and explain:
// I was right. Here we can get the value of a key in an object by .notation (object.key) and use bracket notation (object.key[]) to get the index of any element in the array. In this case we are asking to retrieve the first index or language of the array assigned to the language property in the object myCodingSkills.



// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
//console.log(learnStudent)

// a) Your answer:   student = "George", cohort = "Foxtrot", year = 2022
// b) Verify and explain:
// The output from the terminal is not exactly the same as I put it above but the general idea is correct. The variable learnStudent sets a new instance of the class Learn. Since the name parameter is passed in the constructor of the class Learn, we can pass a name when we declare a new instance of that class by writing new Learn("some name"). The output will have the same values as the class had initially but with the name swapped out for whatever value you assigned to it.
