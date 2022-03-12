let input = document.getElementById("Display");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");

clear.addEventListener('click', (e) => {
    input.value = "";
});

function Display(value){
    input.value += value;
}

equal.addEventListener('click', (e)=> {
    var exp = input.value;
    var res = eval(exp);
    input.value = res;
});