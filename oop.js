let kutya={
    nev:"Andi",
    kor:2,
    "Szereti a madarakat": true
};
console.log(kutya.nev);
console.log(kutya.kor);
kutya.IsKorcs=true;
kutya["Szereti a madarakat"]=true;
delete kutya.nev;

let user={
    name:"John",
    age:30
};
let key =prompt("Mit szeretne tudni a felhasználóról?","name")
console.log(user(key));