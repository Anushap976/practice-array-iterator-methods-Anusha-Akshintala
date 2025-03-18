//Instructions
//Complete each of the following tasks by writing code to manipulate the provided
//arrays. Your solution should only use the array methods covered in the lesson:
//push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
//concat(), slice(), splice(), sort(), and reverse(). Submit the final version of
//the arrays as specified after each task.

//Task 1: Using forEach()
//Task 2: Transforming with map()
// 1. Create an array called numbers with the numbers 1-5.
//2. Use map( ) to create an array where each number is squared. Call this array squares.
//3. Log the new array.
//4. Submit the output by adding comments to the code.
// Task 3: Filtering with filter()
//1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and 100.
//2. Use filter ( ) to create a new array containing only the scores greater than or equal to 80. Call this array highScores.
//3. Log the new array.
//4. Submit the output by adding comments to the code.
//Task 4: Finding with find() and findIndex()
//1. Create an array called favoriteFood that contains a list of your favorite dishes. Try to add 5 or 6 elements.
//2. Use find() to locate the first food with more than 4 letters.
//3. Use findIndex( ) to find the index of that fruit.

//Task 1: Using forEach()
// Creating an array of five favorite cities
let favCities = ["Newyork","LasVegas","Paris","Miami","Chicago"];

//Use forEach( ) to log each city name to the console in uppercase
favCities.forEach(city => {
console.log(city.toUpperCase());   //log output
});

//displays output
//NEWYORK
//LASVEGAS
//PARIS
//MIAMI
//CHICAGO

//Task 2: Transforming with map()
//create an array of numbers 1 to 5
let numbers = [1, 2, 3, 4, 5];

//use map() to create an array where each number is squared
let squares = numbers.map((num) => num * num);
console.log("New array of Squared Numbers:", squares);    //log output

//displays output
//[ 1, 4, 9, 16, 25 ]

// Task 3: Filtering with filter()
//create an array with scores 85, 42, 90, 75, 30, and 100
let scores = [85,42,90,75,100];
//use filter() to create an array with only scores greater than or equal to 80
let highScores = scores.filter(num => num >= 80);
console.log("New array of High Scores:", highScores);   //log output to console

//output
//[ 85, 90, 100 ]

//Task 4: Finding with find() and findIndex()
//create an array of favorite food
let favoriteFood = ["Pizza", "Burger", "Pasta", "Tacos", "Fried rice" ];

//Use find() to locate the first food with more than 4 letters
let findFood = favoriteFood.find(food => food.length > 4);
console.log("First Food with more than 4 letters is:", findFood);

//output
// Pizza

//Use findIndex( ) to find the index of that fruit.
let indexOfFood = favoriteFood.findIndex(food => food === findFood);
console.log("Index of the food:", indexOfFood);

//output
//0
