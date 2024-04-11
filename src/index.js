const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");
const updateText = () => {
    number.innerText = count;
};

let count = 0;
updateText();

const handleAdd = () => {
    count++;
    updateText();
};

const handleMinus = () => {
    count--;
    number.innerText = count;
    updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
