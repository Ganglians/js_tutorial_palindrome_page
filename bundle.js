(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("ganglians-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if(phrase.palindrome()) {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is a palindrome!`;
  }
  else {
    palindromeResult.innerHTML = `<strong>"${phrase.content}"</strong> is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

},{"ganglians-palindrome":2}],2:[function(require,module,exports){
// Export the Phrase object so it can be used in other files
module.exports = Phrase;

// Adds 'reverse' to all Strings' prototype
String.prototype.reverse = function() {
  
  return Array.from(this).reverse().join("");  
}

// Exercise 7.3.1: Returns true if the String is empty or is mostly whitespace
String.prototype.blank = function() {

  return !!this.match(/^$|^\s+$/g);
}

// Exercise 7.3.2: Returns last element of Array
Array.prototype.last = function() {

  return this.slice(-1);  
}

// Reverses a string.
// function reverse(string) {
//  return Array.from(string).reverse().join("");
// }

// Defines a Phrase object
function Phrase(content) {
  this.content = content;
  
  this.processedContent = function processedContent() {
    
    return this.letters().toLowerCase();  
  }
  
  // Returns the letters in the content
  // Ex. 
  // new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    // let theLetters = [];
    // const letterRegex = /[a-z]/i;


    // //for(let i = 0; i < this.content.length; i ++) {
    // Array.from(this.content).forEach(function(character) {
    //   //let character = this.content.charAt(i);
    //   if(character.match(letterRegex)) {
    //     theLetters.push(character);
    //   }
    // });

    // return theLetters.join("");
    // //return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    return (this.content.match(/[a-z]/ig) || []).join("");
  }
  
  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    
    // return this.processedContent() === reverse(this.processedContent());
    if(this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    }
    else {
      return false;
    }
  }
  
  // Makes the phrase LOUDER
  this.louder = function louder() {
    
    return this.content.toUpperCase();  
  }
}
},{}]},{},[1]);
