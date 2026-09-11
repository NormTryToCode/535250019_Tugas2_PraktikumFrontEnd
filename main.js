const button = document.getElementById("submit");

const content_parent = document.querySelector("div.center-element");
const content = document.getElementById("generated-content");

content.classList.add("hidden");

const main_content = document.createElement("ul");
main_content.id = "content-list-parent";

for (let i = 0; i < 2; i++) {
    let list = document.createElement("li");
    main_content.appendChild(list);
}

const childs = main_content.childNodes;
console.log(childs);
let placeholders = ["Nama", "NIM"]
let values = ["Chandra", "535250019"]
let combined = Array.from(childs).map((child, index) => [
    child, 
    values[index],
    placeholders[index]
]);
for (const [child, value, placeholder] of combined) {
    child.innerHTML = `<b>${placeholder}</b><span>:</span> ${value}`
}

const delay = 1000;

const newButton = document.createElement("button");
newButton.classList.add("remove-button");
newButton.innerHTML = "Remove";

// Promise to set a timeout
const sleep = (ms) => new Promise(resolve => {
    setTimeout(resolve, ms);
});

button.addEventListener("click", async () => {
    // Wait after the button is clicked before proceeding
    await sleep(delay);
    
    button.remove();
    content.appendChild(main_content);

    // Revealing the styling
    content.classList.remove("hidden");
    newButton.classList.add("no-hover");

    content_parent.appendChild(newButton);
    // Wait for make sure the button didn't immediately hovered
    await sleep(delay);

    newButton.classList.remove("no-hover");

});

newButton.addEventListener("click", async () => {
    // Wait after the button is clicked before proceeding
    await sleep(delay);
    content.innerHTML = "";
    content.classList.add("hidden");
    newButton.remove();
    content_parent.appendChild(button);
});