import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (state = 0, action) => {
    if (action.type === "ADD") {
        return state + 1;
    } else if (action.type === "MINUS") {
        return state - 1;
    }
    return state;
};

const countStore = createStore(countModifier);
const onChange = () => {
    number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleMinus = () => {
    countStore.dispatch({ type: "MINUS" });
};

const handlePlus = () => {
    countStore.dispatch({ type: "ADD" });
};

add.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);
