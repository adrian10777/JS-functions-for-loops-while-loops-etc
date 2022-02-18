/*Functions
For the most part funcitons are very similar to pythons functions
concepts are the same -define a process with a certain number of parameters/input variables
and have that process be repeatable (callable)
*/

//function definition - similar to python
function addNums(){
    let num1= 3.14;
    let num2= 7;
    return num1 + num2
}

//function call -same as python
console.log(addNums());

// same function but with input
function addNums2(num1, num2){
    return num1 + num2
}

console.log(addNums2(!00, 202));

//JS has multiple ways of doing things

//more modern way to define functions - the ES6 arrow function
//an arrow function is written kind of like a variable assignment but with extra steps
let addNumsArrow = (num1, num2) => {return num1 + num2}
//function name     params    arrow    function

/* let addNums2 = (num1, num2) => {return num1 + num2}

function addNums2(num1, num2){
    return num1 + num2
} */

console.log(addNumsArrow(100, 202));

// arrow function with 1 input
// () around input not needed if there is only 1 input in the => function
let squareNum = num => {return num**2}
//function declaration = function definition

//=> function without input would just be empty ()
let helloworld = () => {console.log('Hello, World.')}

//JS closure aka a self invoking function
//JS version of an anonymous and self-invoking function
// aka a function that is called as soon as it is defined
// we have a function definition using the => function syntax, where the function name ordinarily will be in a function

//When we call SquareNum it will ordinarily look like
squareNum(70); //some num to be squared

//if making this a self invoking function
(num => {return num**2})(70);
//function definition     input
//no function name
//put() where function name goes, and put def of function in there

(name => {console.log(name);})('Devon');

//JS conditionals and control flows

let age = 35;
/* if (){

} */
//same as if ():
// if same as python, conditional inside of (), and codeblock inside of  {}

if (age < 20){
    console.log('child');
}
else if (age < 65){
    console.log('adult');
}
else {
    console.log('Senior');
}

//some operators are slightly diff in JS than they are in Python, work the same way but they might be written diff
//and &&, or ||

// biggest diff -> equality of value and type in py 4 == '4' is wrong, in JS its correct but you use ===
console.log('4' == 4); //true, this would be false in PY

// the == in py and js are diff things!
//js == doesn't exist in py
//js == tests equality of value but not equality of type
//js === does both

console.log('4' === 4); // false

//JS loves having many ways to do the same thing and ES6 loves shorthand
//Ternary Operator = shorthand for conditionals
//replaces if (condition){operation} else if {condition}{operation}
// with the shorthand of 
// condition ? operation : condition ? operation

/*
lets translate the following
if (age < 20){
    console.log('child');
}
else if (age < 65){
    console.log('adult');
}
else {
    console.log('Senior');
}
*/

let age2 = 35;
age < 20 ? console.log('child') : age < 65 ? console.log('adult') : console.log('Senior');

let howOld = age => { return age < 18 ? 'Child' : age >= 18 && age <= 65 ? 'Adult' : 'Senior' }
console.log(howOld(12));

//Looping
// like most other things in JS we have alot of ways to loop
//some are similar to python, some are new

//the js normal for loop is most similar to pythons index loop aka
//for i in range(len(iterable)):
//becomes
// for(let i = 0; i < iterable.length; i++){}
// for(<counter variable>; <condition>; <step>){}

// example: loop through num 0-20
for(let i=0; i<=20; i++){
    console.log(i);
}
// let i=0 means starting at #0, running until i is > 20, increasing i by 1 everytime
//i++ is an operation we can do in JS same as pythons i = i+1 or i+=1

// example: loop through every other num 0-20
for(let i=0; i<=20; i+=2){
    console.log(i);
}

//JS while loop, exactly the same as PY
let counter =0;
while (counter < 10);{
    console.log(counter);
    counter++;
}

//diff while loop
// JS do-while loop
//a  do while loop will always run at least once ->  a do while loops condition is checked at the end of the loop instead of the start

let counter = 0;
do{
    console.log(counter);
    counter++;
} while (counter < 10);

//looping with arrays

//declaring and defining our array
let animals =['Sea urchin', 'Bengal Tiger', 'Elephant', 'Whale', 'Fox'];
//indexing an array is the same as a python lsit
console.log(animals[1]); // bengal tiger

// method #1 normal for loop
//i represents the array indexes
//array.length is the same as len(array)
for(let i=0; i<animals.length; i++){
    console.log(`Array value at index ${i}: ${animals[i]}`);
}

//`Array value at index ${i}: ${animals[i]}`
//JS f string
// use `` backticks and {} replacing f string f'{} {}'

//method #2
// a will represent index numbers not
for(indecesA in animals){
    console.log(indecesA);
}

//another way to loop an array
//similar to a for in loop in python or the python map function
//through the array method Array.forEach()
//Array.forEach() takes a function as a parameter and runs that function on each value in the array
console.log(animals);

animals.forEach( element => console.log(`This is a ${element}`) );


//array methods

//toString and join
// conversion from an array to a string
//array.toString() takes in no parameters
let animalsStr = animals.toString()
console.log(typeof animalsStr, animalsStr);

//join method = array.join()
//just like pythons join but with parameters flipped
//python: delimeter.join(List)
// JS: array.join(delimeter)
//delimeter = what they are seperated by, most used is: ,
//below u used the delimeter of |
let animalsStr2 = animals.join(' | ');
console.log(typeof animalsStr2, animalsStr2);

//Array.map(<function>)
//map is very similar to forEach and to pythons map
// w.e the call back function returns is the value added to the new array
let sea_animals = animals.map( element => {
    if (element.includes('Sea')) {
        return element
    }
    else {
        return false
    }
})
console.log(sea_animals)
//not modifiying original array, creating a new one

// array.filter(<callback function>);
let only_sea_animals = animals.filter( element => {
    if(element.includes('Sea')) {
        return element 
    }
    else {
        return false // filter removes any element that the callback function returns false
    }
});
console.log(only_sea_animals);

// reduce -> less commonly used, better to use for loop, same thing
let nums = [4.99,5.99, 7.99, 2, 39 ]
// reduce is used with numerical arrays to boil them down to a single value
// reduce needs a callback function with 2 params
    // an accumulator (aka what will become our answer) counter variable, variable we build our ans in as we reduce this value to a single value
    // a parameter to represent each element
let one_num = nums.reduce( (accumulator, current_num) => {return accumulator*current_num} ); // 4.99 * 5.99 etc
console.log(one_num);

//you cant always trust cpu decimals -> floats/decimals are not exact
//sometimes you may see 14.0000001 -> its just 14, thats not a real value, your cpu is just confused about 14

// you can fix this issue with Math.round() or Number.toFixed()
console.log(Math.round(14.00001));
console.log(Math.toFixed(3.1415.toFixed(2))); // Number.toFixes(<number of decimal places>)
// the above gives us 3.14

// Array.slice(), Array.splice()

// these can both be considered similar to pythons list slicing but they are slightly diff

// array.slice() is just like list[::]
    //however Array.slice() does not give option for step step is always 1
let animalsSlice = animals.slice(1,3); // give me a copy of index 1 up to but not including index 3 from the animals list
console.log(animalsSlice)
//both python & JS slice are out of place algos, it does not modify the original

//Array.splice() is rather diff -> splice is an in-place which modifies the original array
// Array.splice(<starting index>, <number of indexes to remove>, <optional replacement values (can be fewer or more)>)
console.log('\nbefore splice', animals);
console.log(animals.splice(1, 2, 'Siberian Tiger', 'African Elephant'));
console.log('\nafter splice', animals)

// normal array operations
// remove a value from the end of the array: Array.pop()
console.log(animals);
animals.pop(); //array.pop() in JS is diff than py -? it can only remove the last value from the array
console.log(animals);

// no built in Array.remove()
//removing value from an array by value requires a loop
// you can use slice to remove value at a specific index
animals.splice(2, 1); // removes just item at index #2

// u can use a loop and delete or a loop and splice
for(let i=0; i<animals.length; i++){
    if (animals[i] == 'Hagfish'){
        //delete animals[i]; not recommended, keaves an empty list
        animals.splice(i, 1)
    }
}
console.log(animals);

//we could save this as our own custom remove method like python remove
let remove = (element, arr) => {
    for(let i=0; i<arr.length; i++){
        if (arr[i] == element){
            //delete animals[i]; not recommended, keaves an empty list
            arr.splice(i, 1);
}}}

remove('Thylacene', animals)
console.log(animals);

//1:31:47