let mois = prompt("mois");
saison(mois);
function saison(mois) {
  if (mois == "Janvier" || mois == "JANVIER") {
    alert(mois + 31);
  }
  if (mois == "Fevrier" || mois == "FEvrier") {
    alert(mois + 28);
  }
}
