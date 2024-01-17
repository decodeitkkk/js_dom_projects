let s = "to create a new array with a. segment removed and. or replaced without mutating the original"
let s2="";

for(let a = 0; a<s.length; a++){
    if(s[a - 2]=="." || a==0 ){
        s2 += s[parseInt(a)].toUpperCase();
        continue;
    } 
    s2 += s[a]
}



console.log(s2);