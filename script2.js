/*let i=0;
while (i<3) {
    console.log(i);
    i++;
}

let i=3;
while (i) {
    console.log(i);
    i--;
}

let i=0;
do{
    console.log(i);
    i++;
}while(i<3);

for(let i=0;i<3;i++){
    console.log(i);
    document.write("<br>Hello</br>")
}
i=2;
console.log(i);

let p=prompt("Adj meg egy számot! ", "");
console.log(p);
p=Number(p);
console.log(typeof(p));
let q=5;
console.log(p+q);
console.log(typeof(p+q));

let j=prompt("Kérlek add meg a j értékét!");
j=Number(j);
while(j){
    console.log(j);
    j--;
}
alert("itt a vége , j értéke: "+j);
j++;
alert("j értéke: "+j);
*/
let j=prompt("Kérem az életkorát!",10);
let k=(j<3) ? alert("bébi") :
    (j<10) ? "gyerek" :
    (j<18) ? "fiatal felnőtt" : "minden más";

alert(k);