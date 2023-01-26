JEST testing
===
## How to run code
- Clone repo
- Install Dependence - run next code in terminal
```bash
npm i
``` 
- Run test with
```bash
npm test
```

## Dependence
- JEST
- @babel/preset-env (to import js code in testing using import keyword)

## Scripts
- npm test - to run all tests once 
- npm run watch - to watch on changes from last commit (will run automatically on code save)
- npm run watchAll - to run all tests in watch mode (will also run automatically on code save)

## About
### analyzeArray
- Should recieve array of numbers and give object with next values: average, min, max, length
- It also work if numbers inside array are string type like this: "1"
- Function throw error if wrong data type is passed

### caesarCipher
- Should recieve string and shift factor and return new encripted string
- Should throw error if no string is passed

### calculator
- Calculator is object with methods
- Each method should receive numbers as parameters and return result
- Calculator can: add, subtract, divide, multiply
- It throw error if second number is 0 when divide is selected
- It throw error if wrong data is passed 
- And it work if numbers are type string like this "1"

### capitalize
- Should receive string and return it with first letter capitalized
- If wrong data type is passed it throw error
- It check first character not first letter so if number (inside string) is first character it will just return string without changing

### reverseString
- Should receive string and return reversed string
- If wrong data type is passed it should throw error
- If string is empty it should throw error

## Credits
[TheOdinProject](https://www.theodinproject.com/lessons/node-path-javascript-testing-practice)
