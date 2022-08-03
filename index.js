// Write your solution here!

// cats
//      ✓ is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

// Array functions
// destructivelyAppendCat(name)
//  1) appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
    cats.push(name);
}

// destructivelyPrependCat(name)
//  2) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// destructivelyRemoveLastCat()
//  3) removes the last cat from the cats array
function destructivelyRemoveLastCat() {
    cats.pop();
}

// destructivelyRemoveFirstCat()
//  4) removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// appendCat(name)
//  5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// prependCat(name)
//  6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

// removeLastCat()
//  7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
    const newCats = cats.slice();
    newCats.pop();
    return newCats;
}

// removeFirstCat()
//  8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
    const newCats = cats.slice();
    newCats.shift();
    return newCats;
}