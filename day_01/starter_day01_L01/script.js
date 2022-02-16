// let defi = "Pratiquer les algorithmes en JavaScript";
// console.log(defi);
// console.log(defi.length);
// // permet de determiner la longuer de la variable
// console.log(defi.toUpperCase());
// // permet de mettre en majuscule les mots de la variable
// console.log(defi.toLowerCase());
// // permet de mettre en minuscule les mots de la variable
// console.log(defi.substr(0, 9));

// let phrase = "10 jours en JavaScript.";
// // console.log(phrase.substr(2));
// // console.log(phrase);
// // console.log(phrase.includes("Script"));
// // console.log(phrase.split(""));
// console.log(phrase.split(" "));

// let word = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(word.split(", "));

// let str = "10 Jours en JavaScript";
// let newStr = str.replace("JavaScript", "PHP");
// console.log(newStr);

// let text = "10 Jours en JavaScript";
// // console.log(text.charAt(15));
// console.log(text.charCodeAt("J"));

let text = "10 Jours en JavaScript";
console.log(text.indexOf("a"));
console.log(text.lastIndexOf("a"));

let position =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(position.indexOf("parceque"));
console.log(position.lastIndexOf("parceque"));
console.log(position.search("parceque"));

console.log(text.trim(""));
console.log(text.startsWith(""));
console.log(text.endsWith(""));
console.log(text.match("a"));

let text1 = "10 Jours en";
let text2 = " JavaScript";
console.log(text1.concat(text2));

console.log(text.repeat(2));
