const names = ['Vladlen', 'Elena', 'Igor', 'Lena']

/** Methods
 * names.push('Irina') // __push__ method adds elements into the end of the 'names' array
 * names.unshift('Vlada') // __unshift__ method adds elements at the beginning of the 'names' array
 * const name = names.shift() // __shift__ method extracts first element from the 'names' array
 * const name = names.pop() // __pop__ method extracts last element from the 'names' array
 * const name = names.pop() // __pop__ method extracts last element from the 'names' array
 * const reverseArray = names.toReversed() // __toReversed__ method reverses the 'names' array and save the source array
 * const name = names.toSpliced(2,2) // __toSpliced__ method selects specific elements by index (toSpliced(arrayIndex, amountOfElements)) and save the source array
 * const greatWoman = 'Elena' ====>
 * const index = names.indexOf(greatWoman) // __indexOf__ method returns array's index element number  ====>
 * const newNames = names.with(index, 'Elena the Great') // __with(indexElementNumber, RewritableElement)__ method rewrites element from 'names' array into defined
 */

// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.sort(function (a, b) {
//     return a.charCodeAt(0) - b.charCodeAt(0)
//   })
// )
// console.log(names.toSpliced(2, 2))
// console.log(names)

// const greatWoman = 'Elena'
// const index = names.indexOf(greatWoman)
// console.log(index)
// const newNames = names.with(index, 'Elena the Great')
// names[index] = 'Elena the Great'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const capitalNames = names.map(function(name,index) {
//     if (index === 1) {
//         return 'Elena the Great'
//     }
//     return name
// })
// console.log(capitalNames)

// console.log(names.includes('Igor')) // __includes__ method shows if defined element 'Igor' exist in array
// console.log(names.indexOf('Igor!') !== -1)

const people = [
    { name: 'Vladlen', budget: 4200 },
    { name: 'Elena', budget: 15100 },
    { name: 'Igor', budget: 300 },
    { name: 'Lena', budget: 7520 },
]

// let findedPerson

// for (let person of people) {
//     if (person.budget === 7520) {
//         findedPerson = person
//     }
// }

// const finded = people.find(function(person) {
//     return person.budget === 7520
// })

// const finded = people.findIndex(function(person) {
//     return person.budget === 7520
// })

// const finded = people.find((p) => p.budget === 7520)

// console.log(people.with(finded, 42))

// let sumBudget = 0
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })
// console.log(filtered)
// filtered.forEach(function(p) {
//     sumBudget += p.budget
// })



const sumBudget = people
  .filter((p) => p.budget > 5000)
  .map((p) => p.budget)
  .reduce((acc, p) => acc + p, 0);

console.log(sumBudget)