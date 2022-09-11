// VARIABLES DE ELEMENTOS BTN
let listTimes = document.querySelector(".list-times");
let list = document.querySelector(".list-list")

// VARIABLES DE ELEMENTOS LIST 
let cinco = document.getElementById("5");
let veinte = document.getElementById("20");
let treinta = document.getElementById("30");


// HACER APARECER ELEMENTOS LIST AL CLICK EN BTN LIST
listTimes.addEventListener("click", ()=>{
    list.classList.toggle("display")
})

// EVENTOS - en cada elemento list ejecuta su funcion enviando parametro diferente 
cinco.addEventListener("click", ()=>{   ejecutarList(cinco)   }, true);

veinte.addEventListener("click", ()=>{   ejecutarList(veinte)   }, true);

treinta.addEventListener("click", ()=>{   ejecutarList(treinta)   }, true);


// funcion que recibe el item y extrae el valor del minuto 
function ejecutarList(itemList){
    // asignamos a los inputs el valor correspondiente
    hr.value = 00
    min.value = itemList.id;
    seg.value = 00

    playing() // llamar a la funcion playing
    
}
