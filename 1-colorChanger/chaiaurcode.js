// let currColors = document.body
// currColors.style.background = "#222";
// currColors.style.color = "#f7f7f7"

let btns = document.querySelectorAll(".button");

btns.forEach((btn) => {
    // console.log(btn)
    btn.addEventListener("mouseover", (e) => {
        // console.log(btn.id)
        console.log(e);
        let currColors = document.body;
        currColors.style.background = btn.id;
        if (btn.id == "white" || btn.id == "yellow") {
            currColors.style.color = "#222";
        } else {
            currColors.style.color = "#f7f7f7";
        }
    });
});
