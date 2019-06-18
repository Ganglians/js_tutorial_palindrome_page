let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  
  return urls;
}

console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

// urls: Exercise version
function exerciseUrls(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}

console.log(exerciseUrls(states));

// singles: Imperative version (i.e. filter)
function imperativeSingles(elements) {
  let singles = [];    
  
  elements.forEach(function(element) {
    if(element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  
  return singles;
}

console.log(imperativeSingles(states));

// singles: Functional version (i.e. filter)
function functionalSingles(elements) {
  
  return elements.filter(element => element.split(/\s+/).length === 1);
}

console.log(functionalSingles(states));

// Includes: Exercise version that checks for 'Dakota' with String#includes
function exerciseIncludes(elements) {
  let dakotas = [];
  
  elements.forEach(function(element) {
    if(element.includes("Dakota")) {
      dakotas.push(element);
    }
  });
  
  return dakotas;
}

console.log(exerciseIncludes(states));

// Filter: Exercise version that checks for 'Dakota' with String splitting
function exerciseFilter(elements) {
  
  return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(exerciseFilter(states));

let numbers = [1, 2, 3 ,4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  
  elements.forEach(function(n) {
    total += n;
  });
  
  return total;
}

console.log(imperativeSum(numbers));

// sum: functional solution
function functionalSum(elements) {
  
  return elements.reduce((total, n) => { return total += n; });
}

console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};  
  
  elements.forEach(function(element) {
    lengths[element] = element.length;  
  });
  
  return lengths;
}

console.log(imperativeLengths(states));

function functionalLengths(elements) {
  
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;  
    
    return lengths;
  }, {});
}

console.log(functionalLengths(states));

function functionalExerciseProduct(elements) {
  return elements.reduce((n, element) => {
    return n *= element;  
  }, 1);
}

console.log(functionalExerciseProduct(numbers));