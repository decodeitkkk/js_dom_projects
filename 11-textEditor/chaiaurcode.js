let uppercase = document.querySelector(".uppercase");
let lowercase = document.querySelector(".lowercase");
let capitalize = document.querySelector(".capitalize");
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let input = document.getElementById("input-field");
let output = document.getElementById("output-field");
let og = input.value
console.log(og);

let start = false ;
uppercase.addEventListener("click", () => {
    if(!start){
        let text = input.value.toUpperCase();
        output.innerText = text;
        start = true;
    }else{
        output.innerText = output.innerText.toLowerCase();
        start = false;
    }
});
lowercase.addEventListener("click", () => {
    if (!start){
        let text = input.value.toLowerCase();
        output.innerText = text;
        start = true;
    }else{
        output.innerText = input.value;
    }
});

capitalize.addEventListener("click", () => {
    if(!start){

        let s = input.value;
        let s2 = "";
        for (let a = 0; a < s.length; a++) {
            if (s[a - 2] == "." || a == 0) {
                s2 += s[parseInt(a)].toUpperCase();
                continue;
            }
            s2 += s[a];
        }
        output.innerText = s2;
        start = true;
    }else{
        output.innerText = input.value;
        start = false
    }
});
bold.addEventListener("click", () => {
    if(!start){
        let text = output.innerText.bold()
        output.innerHTML = text;
        start = true;
    }else{
        output.removeChild(output.firstChild)
        output.innerText = input.value;
        start = false
    }
});
italic.addEventListener("click", () => {
    if(start == false){
        let text = input.value.italics();
        output.innerHTML = text;
        start = true;
    }else{
        output.removeChild(output.firstChild)
        output.innerText = input.value;
        start = false
    }
});
underline.addEventListener("click", () => {
    
    if (start == false) {
        let text = input.value;
        output.style.textDecoration = "underline";
        output.style.textUnderlineOffset = "5px";
        output.innerText = text;
        start = true;
        console.log(`!start executed`);
    }else{
        let text = input.value;
        output.style.textDecoration = "none";
        output.style.textUnderlineOffset = "0px";
        output.innerText = text;
        start=  false;
        console.log(`start executed`);
    }
});
