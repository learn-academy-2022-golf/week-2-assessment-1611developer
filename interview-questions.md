# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.



1. What is the difference between a parameter and an argument?

Your answer:
A parameter is a placeholder for a function. You can call the parameter whatever you like but it is most helful to call it the type of data that you are passing in. An argument gets the variable containing the data you are passing into the function invocation. Invoking the function will take the argument and do something to it or with it depending on what your logic is in the function and/or the method you use in the function.

Researched answer:
When you pass in a parameter in a function declaration you are making a placeholder name or declaring a varible for the type of data you are going to pass in the function call with an argument. The parameter has to do with the input as it is declared in the function declaration. The argument has to do with the output as its passed in the function call. The function takes the actual data from the argument that is referenced and does something with it or to it. 



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
The predefined parameters for the .map() method are element, index, and array. Of those three, only the element is required, the other two are optional. The element parameter will look for and give us the actual elements of the array. The index parameter will give us actual index/position/location of a element in the array. Lastly, the array parameter will return us the whole array with the elements it contains for the length of the array. Below we can pass in all of those parameters and we should get the expected outputs from them.

Example:

const fruitsArray = ["peach", "banana", "apple", "pear", "plum"]

const fruitsFunction = (array) => {
    return array.map((element, index, arr) => {
        return element              //  [ 'peach', 'banana', 'apple', 'pear', 'plum' ]
        return index                //  [ 0, 1, 2, 3, 4 ]
        return array                //  [ 'peach', 'banana', 'apple', 'pear', 'plum' ],
                                        [ 'peach', 'banana', 'apple', 'pear', 'plum' ],
                                        [ 'peach', 'banana', 'apple', 'pear', 'plum' ],
                                        [ 'peach', 'banana', 'apple', 'pear', 'plum' ],
                                        [ 'peach', 'banana', 'apple', 'pear', 'plum' ]
    })
}
console.log(fruitsFunction(fruitsArray))

Researched answer:
The predefined parameters of the map method are currentValue, index, and array. Depending on what current count is of an iteration, the parameter currentValue will give you the actual value or element of that index in the array. The index parameter will give you the index of current value or element in the array. While the array parameter will give you the entire array with all the elements. Only the currentValue is required to use the map method in JavaScript.


3. What is the difference between map and filter?

Your answer:
The difference between the map and the filter methods is that the map method retrieves the same number of elements in the array as was in the original array. For example, in the coding concepts question #3 the output had the same number of elements as the original array. The only difference being that we altered the numbers by multiplying each element by 2.

Coding Concepts Question #3
const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)
// Output: [8, 10, 12, 14, 16]

On the otherhand, the filter method will return to you a subset of the original array depending on what condition(s) you put into the function logic. For example, in the coding concepts question #4 the output was a subset of the original array. We got only the odd numbers.

Coding Concepts Question #4
const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)
// Ouput: [11, 13, 15]

Researched answer:
While map and filter both output a newer version of the original array, map does a particular thing to each element in the array and returns that mutated array list with the same number of elements the array had initially. On the otherhand, the filter method will filter through the array list, return the same number of elements if conditions were not met or will return an array list with fewer elements than the array had initially. Map is for altering the elements of an array. Filter for retrieving a subset of elements from an array.


4. What is iteration?

Your answer:
Iteration in programming is the process of telling the computer to do a set of commands until some condition is met. Iteration is used in for-loops, while-loops, do-while-loops and in the built-in forEach, map, and sort array methods in JavaScript.

Researched answer:
Iteration is the process whereby a computer program will iterate or continue a number of steps until some task is completed. In programming languages, the general means by which one can setup a program to do this is by the for-loop, while-loop, and do-while loop.


5. What is the difference between a class and an object?

Your answer:
A class is a blueprint of an object. An object is another data structure that can store any of the six primitive data types as well as arrays. Classes have objects while objects don't have classes.

Researched answer:
A class is a blueprint whereby a developer can create new objects from those classes. An object is a complex data type that can store information with key:value pairs. Let's say we have a user class. This user class can have an object in it that has the properties or attributes of first name, last name, username, and avatar. We can leave the values empty and create a new instance of that class and pass in some values like, Philip, Morrison, 1611.developer, etc. In both cases we have classes and objects. We can also not only store information in an object, but have it perform some behavior or operation, as well. We can write a function in the object that when a user uploads an image for their avatar, our function automatically resizes the image to the correct ratio or a message is printed to the UI saying "Your image has been successfully uploaded."



6. STRETCH: What is hoisting in JavaScript?

Your answer:
Hoisting is what happens when you reference a variable outside of its scope. For instance, if you were to reference a variable declared with the keyword var outside of a code block, the JavaScript interpreter, although it reads top to bottom, will search for that previously declared variable and hoist or bring up that code block to the "top of page" that referenced it and run the code.

Researched answer:
Hoisting in JavaScript refers to the execution of code and referencing of a function or variable before the variable or function is assigned. What happens is the interpreter will hoist the function or variable to the top of the scope so that the interpreter can execute the code it initially tried to. Since hoisting is all about scope, it works differently depending on how you assign a variable (var, let, or const). Essentially, hoisting allows you to use variables or functions before they are declared.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories:
User stores help us understand what we need in an application in order for it to accomplish some sort of task. It is a nice way to break down what our application needs to do so we can figure out how we should implement it. For example, a CatTinder user should be able to sign up and fill out personal information and preferences. From that information, a user should be provided a list of eligible cat profiles to swipe through in order to find a match. A user should be able to view the profile of a cat that is presented to them at the top of the deck. A user should be able to swipe left to decline a cat and swipe right to show interest in a cat. If the other cat also swipes right, a user should be able to contact that matched cat and start a conversation with them. As a user, I can repeat this process as need be until there are no more eligible cats in my area.

2. Spread operator:
The spread operator is a new update in Javascript ES6. Its syntax allows the developer to more simply combine arrays, copy an array, expand an array, or find the minumum or maximum number of elements in an array. The spread operator is characterized by the periods (...). In addition to arrays, we can use the spread operator with objects, too.

3. React:
React is a opensource front-end JavaScript library created by Facebook that helps developers create user interfaces. React is unique in that everything is made using components, which are functions that interact with different elements in the document object model (DOM). Through the DOM, React allows a website to update the actual element on the page when a change occurs instead of refereshing the entire webpage. This not only decreases the client's fustration in using the app but also in bandwith usuage as only the element that changed is updated and not the entire page; thus also helping with scalability. This type of website that updates elements dynamically is called a single page appilication (SPA).

4. React props:
A React prop is a function argument inside of a React component. This prop or property inside of the component will determine what element is displayed to the end user and how it behaves. Props are also useful in that it is the means by which you can transfer information from one component to another component.

5. DOM events:
A DOM event is any time a user interacts with a webpage. If a user scrolls, clicks a button, fills out a form, hovers over an image, etc. All of these events are registered in the DOM. It is critical that those that develop websites be aware of how the user is interacting with the application so that they can better improve usuabilitly and performance. The way in which a DOM event gets registed is by event listeners.