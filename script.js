let number = document.querySelector(".numbers");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let time = document.querySelector(".time");
let zarb = document.querySelector(".zarb");
let mod = document.querySelector(".mod");
let dot = document.querySelector(".dot");
let openQavs = document.querySelector(".openQavs");
let closeQavs = document.querySelector(".closeQavs");

let concel = document.querySelector(".concel");
let barobar = document.querySelector(".barobar");

function append(val) {
    number.innerHTML += val;
}

one.onclick = () => append("1");
two.onclick = () => append("2");
three.onclick = () => append("3");
four.onclick = () => append("4");
five.onclick = () => append("5");
six.onclick = () => append("6");
seven.onclick = () => append("7");
eight.onclick = () => append("8");
nine.onclick = () => append("9");
zero.onclick = () => append("0");

plus.onclick = () => append("+");
minus.onclick = () => append("-");
time.onclick = () => append("/");
zarb.onclick = () => append("*"); 
mod.onclick = () => append("%");
dot.onclick = () => append(".");
openQavs.onclick = () => append("(");
closeQavs.onclick = () => append(")");

concel.onclick = () => number.innerHTML = "";

barobar.onclick = () => {
    try {
        if(number.length < 13){
        let expression = number.innerHTML;
        let result = eval(expression);
            number.innerHTML = result;
        }
    } catch (error) {
        number.innerHTML = "Error";
    }
};
