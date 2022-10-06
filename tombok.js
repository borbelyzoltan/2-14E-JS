"use strict";
/*const szamok=[];
for(let i=0;i<10;i++){
    //szamok[i]=i;
    szamok.push(i);
}
console.log(szamok);

console.log("A tömb számossága: "+szamok.length);
console.log("A tömb 0.-ik eleme: "+szamok[0]);


const a=[];
const b=[];
const c=[];
let j=0;
let k=0;
for(let i=0;i<100;i++){
    a[i]=i+1;
    if(a[i]%2==0){
        b[j]=a[i];
        j++;
    }
    if(a[i]%3==0){
        c[k]=a[i];
        k++;
    }
    if(a[i]%3==0 && a[i]%5==0){
        document.write("a elem osztható 5-el és 3-al: "+a[i]+"<br>");
    }
}
console.log(a);
console.log(b);
console.log(a.length);
console.log(b.length);
console.log(c.length);



const a=[];
for(let i=0;i<100;i++){
    let x=Math.floor(Math.random()*100)+1;
    while(a.includes(x)){
        x=Math.floor(Math.random()*100)+1;
    }
    a.push(x);
}
for(let i=0;i<100;i++){
document.write(a[i]+" ");
if(i%5==0 && i!=0){
    document.write("<br>");
}
}
*/

const ot=[];
const hat=[];
const het=[];
for(let i=0;i<90;i++){
    let x=Math.floor(Math.random()*100)+1;
    ot.push(x);
}
console.log(ot);

for(let i=0;i<45;i++){
    let x=Math.floor(Math.random()*100)+1;
    hat.push(x);
}
console.log(hat);

for(let i=0;i<35;i++){
    let x=Math.floor(Math.random()*100)+1;
    het.push(x);
}
console.log(het);