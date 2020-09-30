// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../check-results.js';

//const { didUserWin } = require("../check-results");

const test = QUnit.test;

test('user: rock, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: rock, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'rock';
    const computerThrow = 'paper';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: rock, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'rock';
    const computerThrow = 'scissors';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: paper, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'paper';
    const computerThrow = 'rock';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: paper, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'paper';
    const computerThrow = 'paper';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: paper, computer: scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'paper';
    const computerThrow = 'scissors';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: scissors, computer: rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'scissors';
    const computerThrow = 'rock';
    const expected = 'lose';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: scissors, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'scissors';
    const computerThrow = 'paper';
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('user: scissors, computer: scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userThrow = 'scissors';
    const computerThrow = 'scissors';
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin(userThrow, computerThrow);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
