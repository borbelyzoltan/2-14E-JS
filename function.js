/*function Hello(){
    console.log("hello");
}
let func=Hello;
func();
Hello();

let hello=function(){
    console.log("hello");
}
hello();

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

let osszeg=(a,b) => a+b;
alert(osszeg(1,2));


let double =n =>n*2;
console.log(double(3));

let age=prompt("Hány éves vagy? ");
let hello =(age<18) ?
()=> alert("Hello"):
()=> alert("Üdvözlöm!");

hello();
*/
let osszeg= (a,b) => {
    let eredmeny=a+b;
    console.log("hello")
    return eredmeny;
}
console.log(osszeg(1,2));