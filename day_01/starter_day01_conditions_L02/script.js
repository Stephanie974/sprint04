console.log(
  "There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);
let number = 10;
console.log(typeof 10);
console.log("10" === 10);
let a = parseInt("10");
console.log(a === 10);
let juste = 9.8;
console.log(juste);

console.log(parseFloat("9.8") == 10);

let hardwork = "python";
let hardwork0 = "jargon";
console.log(hardwork.includes("on"));
console.log(hardwork0.includes("on"));

let hardwork1 = "I hope this course is not full of jargon.";
console.log(hardwork1.includes("jargon"));

var randomnumber = Math.floor(Math.random() * 100);
console.log(randomnumber);

var randomnumberX = Math.floor(Math.random() * 100 + 50);
console.log(randomnumberX);

let randomnumber2 = Math.floor(Math.random() * (101 - 50)) + 50;
console.log(randomnumber2);

var randomnumber1 = Math.floor(Math.random() * 255);
console.log(randomnumber1);
// str.slice(startIndex [ endIndex ]);
let str =
  "You cannot end a sentence with because because because is a conjunction";

console.log(str.indexOf("because"));
console.log(str.lastIndexOf("e"));

// console.log(str.search("because"));
// console.log(str.charAt("because "));

// console.log(str.substr(31, 24));
console.log(str.slice(7));
// console.log(str.slice("because"));
// console.log(string.slice(start, end));
// let substr = str.slice(startIndex [endIndex ]);

// let p = prompt("Entrer un nombre");
// function testPair() {
//   if (p % 2 == 0) {
//     alert(p + " est un nombre pair");
//   } else {
//     alert(p + " est un nombre impair");
//   }
// }
// console.log(testPair());

// let p = prompt("Entrer un nombre");
// function testPair() {
//   if (p % 2 == 80 - 100) {
//     alert(p + "A");
//   } else {
//     alert(p + "B");
//   }
// }
// console.log(testPair());

// let note = prompt("Entrez votre note:");
// function notation() {
//   if (note >= 80 && note <= 100) {
//     alert("A");
//   }
//   if (note >= 70 && note <= 89) {
//     alert("B");
//   }
//   if (note >= 60 && note <= 69) {
//     alert("C");
//   }
//   if (note >= 50 && note <= 59) {
//     alert("D");
//   }
//   if (note >= 0 && note <= 49) {
//     alert("F");
//   }
// }

let mois = prompt("mois");
saison(mois);
function saison(mois) {
  if (mois == "janvier" || mois == "février" || mois == "mars") {
    alert(mois + " Fais parti de l'hivers");
  }
  if (mois == "avril" || mois == "mai" || mois == "juin") {
    alert(mois + " Fais parti de l'été");
  }
  if (mois == "juillet" || mois == "aout" || mois == "septembre") {
    alert(mois + " Fais parti de pringtemps");
  }
  if (mois == "octobre" || mois == "novembre" || mois == "décembre") {
    alert(mois + " Fais parti de l'automne");
  }
}
