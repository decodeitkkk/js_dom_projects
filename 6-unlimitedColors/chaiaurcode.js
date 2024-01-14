let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let genHexCode = () => {
    let str = "0123456789ABCDEF";
    let hexcode = "#";
    for (let a = 0; a < 6; a++) {
        hexcode += str[Math.round(Math.random() * 15)];
    }
    return hexcode;
};
// let hc = genHexCode();
// console.log(hc);

let setColor;

start.addEventListener(
    "click",
    () => {
        if (!setColor) {
            setColor = setInterval(() => {
                document.body.style.backgroundColor = genHexCode();
                document.body.style.transition =  "0.5s ease-in-out";
            }, 1000);
        }
    },
    false
);

stop.addEventListener(
    "click",
    () => {
        clearInterval(setColor);
        setColor = null;
        console.log(`execution stopped`);
    },
    false
);
