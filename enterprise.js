const assert = require('assert')

const employees = [
  { name: 'Marcel', salary: 3000, freelancer: true },
  { name: 'Sandra', salary: 3100, freelancer: false },
  { name: 'Thomas', salary: 2800, freelancer: false },
  { name: 'Alexander', salary: 3502, freelancer: false },
  { name: 'Els', salary: 3050, freelancer: true },
  { name: 'Igor', salary: 2600, freelancer: true },
  { name: 'Anne', salary: 2600, freelancer: true },
]

//* Hoeveel bedraagt de totale loonkost iedere maand?
function totalSalaries(employees) 
{
  let totale= employees.reduce((a,b)=>a+b.salary,0)
  return totale  
}
console.log("total salary")
console.log(totalSalaries(employees))


//console.log(assert)

//* Welke freelancer verdient het meest?
function bestPaidFreelancer(employees) 
{  
  let free= employees.filter(a=>a.freelancer==true)
  let hight=  Math.max.apply(Math,free.map((a=>a.salary)))
  let best= employees.filter(a=>a.salary==hight)
  return best 
}
console.log("best paid freelancer")
console.log(bestPaidFreelancer(employees))



//* Wie verdient er allemaal meer als 3000?
function earsMoreThan3k(employees) {
  return employees
  .filter(a=>a.salary>3000)
}
console.log("earn >3000")
console.log(earsMoreThan3k(employees))



//* Hoeveel verdient een interne medewerker gemiddeld?
function averageSalaryNonFreeLancer(employees) {
let nonfree= employees.filter(a=>a.freelancer==false)
let sal= nonfree.reduce((a,b)=>a+b.salary,0)
return sal/nonfree.length
}
console.log("salaire moyen")
console.log(averageSalaryNonFreeLancer(employees))

//* Wie heeft de langste naam?
function longestName(employees) {
  for(let i=0;i<employees.length;i++){}
  return employees.filter((a,b)=>a.name.localeCompare(b.name)) 

}
console.log("long prenom")
console.log(longestName(employees))


//* Print de namen van alle werknemers, gesorteerd op voornaam.
function sortedNames(employees) {
  return employees.sort((a,b)=>a.name.localeCompare(b.name))  
}
console.log("tri par nom")
console.log(sortedNames(employees))


//*/