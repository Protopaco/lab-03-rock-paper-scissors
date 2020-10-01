// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('result is either rock, paper, or scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const optionArray = ['rock', 'paper', 'scissors'];
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = optionArray.includes(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('result is either sharock, papaper, or sciscissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const optionArray = ['sharock', 'papaper', 'sciscissors'];
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = optionArray.includes(getRandomThrow());

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});