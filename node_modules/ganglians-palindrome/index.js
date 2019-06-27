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