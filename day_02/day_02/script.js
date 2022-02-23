let array = [];
console.log(array);
let myArray = ["judoo", "boxe", "tennis", "basket", "hand"];
console.log(myArray);
console.log(myArray.length);
console.log(myArray[0]);
console.log(myArray[2]);
console.log(myArray[4]);
// Déclarez un tableau appelé mixedDataTypes, placez différents types d
//  données dans le tableau et recherchez la longueur du tableau.
//  La taille du tableau doit être supérieure à 5
let mixedDataTypes = ["ordi", "souris", "clavier", "tonton", "tata", "cousine"];
console.log(mixedDataTypes.length);
// Déclarez un tableau nommé itCompanies et attribuez les valeurs initiales:
//  Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon
// 7. Affichez le tableau avec console.log()
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// console.log(typeof itCompanies);
// Affichez le tableau sous forme de phrase:
//  "Facebook, Google, Microsoft, Apple, IBM, Oracle et Amazon sont de grandes entreprises d'IT".
let itCompanies1 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(
  itCompanies1[0] +
    " , " +
    itCompanies1[1] +
    " , " +
    itCompanies1[2] +
    " , " +
    itCompanies1[3] +
    " , " +
    itCompanies1[4] +
    " , " +
    itCompanies1[5] +
    " et " +
    itCompanies1[6] +
    " sont de grandes entreprises d'IT."
);

// Vérifiez si une certaine entreprise existe dans le tableau itCompanies.
// S'il existe, retournez le nom de l'entreprise sinon retournez "une société introuvable".
// let itCompanies2 = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];

console.log(itCompanies2[0]);
console.log(itCompanies2[3]);
console.log(itCompanies2[6]);
console.log(itCompanies2[1]);
console.log(itCompanies2[2]);
console.log(itCompanies2[4]);
console.log(itCompanies2[5]);

let itCompanies2 = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let found = itCompanies2.find((element) => element > 10);

let unecertainecompanie = "antenne reunion";
let person = 0;
console.log(unecertainecompanie);
if (unecertainecompanie == itCompanies2[0]) {
  console.log("c'est =");
} else {
  console.log("c'est pas =");
}
