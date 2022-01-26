// Задание 2

const ordersArr = [4, 2, 1, 3]
const people = [
  { id: 1, name: 'Максим' },
  { id: 2, name: 'Николай' },
  { id: 3, name: 'Ангелина' },
  { id: 4, name: 'Виталий' },
]

function giveTalonsInOrder(patients, orders) {
  const arr = []
  for (const order of orders) arr.push(patients.find((el) => el.id === order))
  return arr
}
console.log(giveTalonsInOrder(people, ordersArr))

/****************** как вариант  *********************** */

// function giveTalonsInOrder(patients, orders) {
//   const arr = orders.map((el) => {
//     return { id: el, name: patients[el - 1].name }
//   })
//   return arr
// }

// console.log(giveTalonsInOrder(people, ordersArr))
