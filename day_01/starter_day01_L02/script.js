// let myAge = 250;
// console.log(myAge);
// let yourAge = 25;
// console.log(yourAge);
// console.log("J'ai " + (myAge - yourAge) + " de plus que toi.");

// let d = new Date();
// let year = d.getFullYear();
// console.log(year);
// let person = year - prompt("Entrez votre date de naissance");
// console.log(person);

// if (person > 18) {
//   alert("vous avez " + person + " ans. Vous etes autorisé à conduire.");
// } else {
//   alert(
//     "Vous avez " +
//       person +
//       " ans. Vous n'etes pas autorisé de conduire, il faut patienter, encore quelques années!"
//   );
// }
// console.log(alert);

// Entrez le nombre de vôtres que vous habitez: 100
// // Vous avez vécu 3153600000 secs.
// let seconde = 3156000;
// let agededuit = prompt("Entrez votre age") * 31536000;
// console.log(agededuit);

// Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time

//     YYYY-MM-DD HH:mm
//     DD-MM-YYYY HH:mm
//     DD/MM/YYYY HH:mm

// let date1 = new Date("February 13, 1991 06:44:00");
// console.log(date1);

// let date2 = new Date("1991-02-13T06:44:00");
// console.log(date2);
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(date);
