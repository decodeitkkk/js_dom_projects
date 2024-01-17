let typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "Mast", "Dhinchak", "Weird","Awesome"];
let wl = 0

function type() {
    console.log(typeof words.length);
    count = 0;
    let i = setInterval(() => {
        // console.log(words[wl][count]);
        typedTextSpan.innerText += words[wl][count]
        // inner loop
       
        count += 1;
        if (count == words[wl].length) {
            clearInterval(i);
            erase()
        }
    }, 500);
}
type();

function erase() {
    console.log(`executed`);
    let count = words[wl].length;
    
    let i = setInterval(()=>{
        // console.log(words[0][count]);
        console.log(words[wl].substring(0,count));
        typedTextSpan.innerText=""
        typedTextSpan.innerText+= words[wl].substring(0,count)

        count -= 1
        if (count < 0) {
            clearInterval(i);
            wl += 1
            if(wl == words.length){
                wl = 0
            }
            type()
        }
    },500)
}
