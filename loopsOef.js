// print de getallen tussen 0 en 100
for (let i=0; i<11;i++){
    console.log("number is", i)
}

// grootste getal uit een lijst
const number= [1,2,3,4,5,6,7,8,9,156]
let a= 0
for (let i=0;i<number.length+1;i++){
        if(number[i]>a){a=number[i]}
    }
console.log(a)

// langste string uit lijst
 let animaux=['chien', 'chat','lapin', 'poule', 'vache','cheval', 'elephant']         
 let animauxbis=animaux.map(a=>a.length)
 console.log(animaux)
 console.log(animauxbis)
 let z=0;
for(let i=0; i<animaux.length;i++)
{
    if(animaux[i].length>z){z=animaux[i].length}
}

for(let i=0;i<animaux.length;i++)
{
    if(animaux[i].length==z)
    {console.log(animaux[i])}}
 
 
// gemiddelde van een lijst getallen
const numbera= [1,2,3,4,5,6,7,8,9]
let moyenne= numbera.reduce((a,b)=>a+b,0);
console.log(moyenne/numbera.length)

// check of een string een palindroom is

function reverse (s){
    return s.split("").reverse().join("");
}

function ispal(w){
    if(w==reverse(w)){console.log ("is palindroom")}
    else{console.log("is not palindroom")}
}

ispal("rad")
ispal("radar")
