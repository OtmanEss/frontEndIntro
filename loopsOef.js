// print de getallen tussen 0 en 100
for (let i=0; i<11;i++){
    console.log("number is", i)
}

// grootste getal uit een lijst
const number= [1,2,3,4,5,6,7,8,9]
let a= 0
for (let i=0;i<number.length+1;i++){
        if(i>a){a=i}
    }
console.log(a)

// langste string uit lijst
 const animaux=['chien', 'chat','lapin', 'poule', 'vache','cheval']         //.map(a=>a.length);
 const result= animaux.filter(a=>a.length>5);
 console.log(result)
 
// gemiddelde van een lijst getallen
const numbera= [1,2,3,4,5,6,7,8,9]
let moyenne= numbera.reduce((a,b)=>a+b,0);
console.log(moyenne/numbera.length)

// check of een string een palindroom is