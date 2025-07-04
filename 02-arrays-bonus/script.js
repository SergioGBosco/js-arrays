const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const temparray = [];
for (i = teachers.length - 1; i >= 0; i--)
  temparray.push(teachers[i]);
const reversedTeachers = temparray;
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
// const deleteed = [];

// for (let i = 0; i < teachers.length; i++) {
//   const shortname = teachers[i];

//   if (shortname.length <= 2) {
//     deleteed.push(shortname)
//   }
// }

// console.log(teachers)
// console.log(deleteed)
teachers.splice(1, 1)
console.log(teachers)


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let result;
if (teachers.indexOf(`Fabio`) != -1)
  result = `presente`
else {
  result = `Assente`
}
const isFabioPresent = result;
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;