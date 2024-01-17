let clock = document.querySelector("#clock");

setInterval(() => {
    let d = Date.now();
    let dd = new Date(d);
    let time = dd.toLocaleTimeString("en-US");
    clock.innerHTML = time;
}, 1000);
