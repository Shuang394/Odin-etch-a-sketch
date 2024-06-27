document
// get root div
let root = document.querySelector("#root");

for (i = 0; i < 16; i++){
    // create a new flex div for every iteration, 16 times
    let div = document.createElement("div");
    div.setAttribute("style", "display: flex")

    //append the div to root
    root.appendChild(div);

    for (j = 0; j < 16; j++){
        // every loop, create a div that will reside inside the div
        let innerdiv = document.createElement("div");
        // number the divs
        let num = document.createElement("p");
        num.textContent = i * 16 + j
        // add the div into the innerdiv
        innerdiv.appendChild(num);
        div.appendChild(innerdiv);
    }
}