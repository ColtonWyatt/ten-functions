"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

function isTrue(input){
    if (input === true){
        return true
    } else {

    } return false
}

function isFalse (input){
    if (input === false){
        return true
    }  else  {
        return false
    }
}

function not (input) {
    return input = !input
}


function addOne (input) {
    return Number(input) + 1
}

function isEven (input){
    if (input % 2 == 0 && input !== false){
        return true
    } else {
        return false
    }
}

function isIdentical (input1, input2){
    return input1 === input2
}

function isEqual (input1, input2){
    return input1 == input2
}

function or (input1, input2){
    return input1 || input2
}

function and (input1, input2){
    return input1 && input2
}

function concat (input1, input2){
    return input1.toString() + input2.toString()
}