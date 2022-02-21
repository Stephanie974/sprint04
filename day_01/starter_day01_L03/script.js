// Créez un format d'heure lisible par l'homme à l'aide de l'objet Date time.
// L'heure et la minute doivent être toujours à deux chiffres (7 heures devraient être 07 et 5 minutes devraient être 05)

// YYYY-MM-DD HH:mm eg. 2020-01-02 07:05
const d = new Date();
console.log(d);

// Ecrire un programme qui indique le nombre de jours dans un mois.

// Enter un mois: Janvier
// Janvier a 31 jours.

// Enter un mois: JANVIER
// Janvier a 31 jours

// Enter un mois: Fevrier
// FEvrier a 28 jours.

// Enter un mois: FEvrier
// Fevrier a 28 jours.
function NombreJourMois(mois, annee) {
  var nbreJour = 0;

  if (mois <= 6) {
    if (mois % 2 == 0) {
      nbreJour = 31;
    } else {
      nbreJour = 30;
    }
  } else {
    if (mois % 2 == 1) {
      nbreJour = 30;
    } else {
      nbreJour = 31;
    }
  }
  if (mois == 1) {
    if (annee % 4 == 0) {
      if (annee % 100 == 0) {
        if (annee % 400 == 0) {
          nbreJour = 29;
        } else {
          nbreJour = 28;
        }
      } else {
        nbreJour = 29;
      }
    } else {
      nbreJour = 28;
    }
  }

  return nbreJour;
}
console.log(nbreJour);
