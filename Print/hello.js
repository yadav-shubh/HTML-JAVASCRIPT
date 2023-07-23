console.log("Hello");
let a =10;
let b=20;

function getAverate(a,b) {
    return a+b;
}
// console.log(getAverate(a,b))

let obj = {
    shubham:90,
    rajat : 80,
    rajesh :40
}

// for (let i=0;i< Object.keys(obj).length;i++){
//     console.log(Object.keys(obj)[i] + " " + Object.values(obj)[i])
// }

for (let i in obj){
    console.log(i +" "+ obj[i])
}