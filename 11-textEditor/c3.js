let input = document.getElementById("input-field");
let output = document.getElementById("output-field");
let og = input.value;

let uppercase = (text) => {
    return text.toUpperCase();
};
let lowercase = (text) => {
    return text.toLowerCase();
};
let capitalize = (text) => {
    let s = text;
    let s2 = "";
    for (let a = 0; a < s.length; a++) {
        if (s[a - 2] == "." || a == 0) {
            s2 += s[parseInt(a)].toUpperCase();
            continue;
        }
        s2 += s[a];
    }
    console.log(s2);
    return s2;
};
let bold = (text) => {
    output.style.fontWeight == "" ? output.style.fontWeight = "bold": output.style.fontWeight = "";
    return text;
};

let italic = (text) => {
    output.style.fontStyle == ""
        ? (output.style.fontStyle = "italic")
        : (output.style.fontStyle = "");
    return text;
};
let underline = (text) => {
    if (output.style.textDecoration == "" && output.style.textUnderlineOffset == "") {
        output.style.textDecoration = "underline";
        output.style.textUnderlineOffset = "5px";
        return text;
    } else {
        output.style.textDecoration = "";
        output.style.textUnderlineOffset = "";
        return text;
    }
};

let otext = "";
let btns = document.querySelectorAll("button");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(btn.classList[1]);
        if(!input.value){
            if(output.innerText == "Output"){
                null
            } else{
                output.innerText = "Output"; 
                output.style.fontWeight = "";
                output.style.fontStyle = "";
                output.style.textDecoration= "";
            } 
            Toastify({
                text: `Enter a Valid Text`,
                className: "info",
              }).showToast();
            return;
        }
        otext = otext == "" ? input.value : output.innerText;
        if (btn.classList[1] == "uppercase") {
            output.innerText = uppercase(otext);
        } else if (btn.classList[1] == "lowercase") {
            output.innerText = lowercase(otext);
        } else if (btn.classList[1] == "capitalize") {
            output.innerText = capitalize(otext);
        } else if (btn.classList[1] == "bold") {
            output.innerHTML = bold(otext);
        } else if (btn.classList[1] == "italic") {
            output.innerHTML = italic(otext);
        } else if (btn.classList[1] == "underline") {
            output.innerHTML = underline(otext);
        } else {
            console.log(`else`);
        }
    });
});
