//Problem 1:
const checkAge = age => {
    return age >= 18? "You are good to go!": "Sorry! You must be 18 or older!"
}
console.log(checkAge(18))//Output : You are good to go!
console.log(checkAge(17))//Output : Sorry! You must be 18 or older!
console.log(checkAge(19))//Output : You are good to go!

// Problem 2:
const checkWeather = weather => {
    return weather === "rainy"? "Get your rain jacket!": "No rain on today's forecast!"
}
console.log(checkWeather("rainy"))//Output : "Get your rain jacket!"
console.log(checkWeather("clear"))//Output : "No rain on today's forecast!"

// Problem 3:
const checkEven = number => {
    return number % 2 == 0? "That's an even number.": "That's an odd number."
}
console.log(checkEven(5))//Output : "That's an odd number."
console.log(checkEven(4))//Output : "That's an even number."

// Problem 4:
const greaterNumber = (num1, num2) => {
    return num1 > num2? num1 + " is more than " + num2: num1 + " is less than " + num2
}
console.log(greaterNumber(7,4))//Output : "num1 is more than num2"
console.log(greaterNumber(4,7))//Output : "num1 is less than num2"

