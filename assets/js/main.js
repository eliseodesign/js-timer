    // VARIABLES DE INPUTS 
let hr = document.getElementById("hr");
let min = document.getElementById("min");
let seg = document.getElementById("seg");

// VARIABLES DE BOTONES 
let music = document.getElementById("music");
let play = document.getElementById("play");

// EVENTOS PARA PROCESAR INPUT 
hr.addEventListener("input", ()=>{dosNumeros(hr)}); //con btn play /
hr.addEventListener("keyup", (e)=>{enter(e)});      //con enter // recordar que aqui con arrowf paso e como paramtro a llamar a enter() y tambien le paso e

min.addEventListener("input", ()=>{dosNumeros(min)});
min.addEventListener("keyup", (e)=>{enter(e)});

seg.addEventListener("input", ()=>{dosNumeros(seg)});
seg.addEventListener("keyup", (e)=>{enter(e)});



function dosNumeros(valor){ // funcion para formatear input a dos numeros 
    let nn = valor.value

    if(nn.length > 2) valor.value = nn.slice(0,2); //recortamos el input en caso se pase de 2 caracteres
    if(nn > valor.max) valor.value = valor.max    //si la entrada es > al max, devuelve el max
    if(valor.value <= -1) valor.value = valor.min   // si la entrada es < al min, devuelve el min
}

function enter(e){
    if (e.keyCode === 13) // 13 es el keycode de ENTER
    playing() // llamo a la función playing          
}
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// EVENTO DE PLAY 
play.addEventListener("click", playing)



var corriendo = false // definimos variable global para preguntar si el intervalo esta corriendo 
let intervalooo; // definimos intervalo aqui para evaluar si esta activo al elegir un elemento del list time
let timeout


// FUNCION PLAYING 
function playing(){
    //Obtenemos los valores de los inputs
    let horas = Math.floor(hr.value)
    let minutos = Math.floor(min.value)
    let segundos = Math.floor(seg.value)

    // obtenemos los milisegundos totales sumando, para luego llamar a stop()
    let milisegundos = (horas*1440000) + (minutos*60000) + (segundos*1000)

    if(horas == 0 && minutos == 0 && segundos == 0) return // que no ejecute nada si no hay valores 

    if(corriendo){  // si ya esta corriendo y intentamos correr otro, detiene el anterior 
        clearInterval(intervalooo)
        clearTimeout(timeout);
    }
    else{
        corriendo = true
        toogleINC()
    } 

    
    cargarSegundo(); // llamamos a la funcion segundo ya que el interval se ejecutara un segundo despues asi no lo perdemos

    //Definimos y ejecutamos los segundos
    function cargarSegundo(){
        let txtSegundos;

        if(segundos < 0) segundos = 59; 

        //Mostrar Segundos en pantalla
        txtSegundos = ('0'+segundos).slice(-2)
        seg.value = txtSegundos;
        segundos--;
        cargarMinutos(segundos);
    }

    //Definimos y ejecutamos los minutos
    function cargarMinutos(segundos){
        let txtMinutos;

        if(segundos == -1 && minutos !== 0){
            setTimeout(() =>{
                minutos--;
            },500)
        }else if(segundos == -1 && minutos == 0){
            setTimeout(() =>{
                minutos = 59;
            },500)
        }

        //Mostrar Minutos en pantalla
        txtMinutos = ('0'+minutos).slice(-2)
        min.value = txtMinutos;
        cargarHoras(segundos,minutos);
    }

    //Definimos y ejecutamos las horas
    function cargarHoras(segundos,minutos){
        let txtHoras;

        if(segundos == -1 && minutos == 0 && horas !== 0){
            setTimeout(() =>{
                horas--;
            },500)
        }else if(segundos == -1 && minutos == 0 && horas == 0){
            setTimeout(() =>{
                horas = 2;
            },500)
        }

        //Mostrar Horas en pantalla
        txtHoras = ('0'+horas).slice(-2)
        hr.value = txtHoras;
    }

    //Ejecutamos cada segundo
    intervalooo = setInterval(cargarSegundo,1000);

    timeout = setTimeout(()=>{ // a los milisegundos de tiempo(suma de todos los tiempo) detendremos playing, estilos, etc...
        stop()
        alarma.play()
    }, milisegundos+1000)// le sumamos 1000 ya que hay un segundo de retrazo

}


function toogleINC(){
    document.body.style.animation=`back 10s ease-in-out infinite alternate`

    let elements_number = document.querySelectorAll(".number") // creamos node list con los article.number
    let elements_type = document.querySelectorAll(".number .type") // creamos node list con los article.number
    let newStyles = ["a","b","c"] // array con el nombre de los estilos agregar

    // usaremos un bucle para recorrer el nodeList y asignar el estilo correspondiente ya que se encuentran en el mismo orden
    for(let i = 0; i < elements_number.length;i++) {
    elements_number[i].classList.toggle(`${newStyles[i]}`);

        if(elements_type[i].textContent == "Hrs" || elements_type[i].textContent == "Min" ||elements_type[i].textContent == "Seg"){
            elements_type[i].textContent = elements_type[i]=":"

        }
        else{
            elements_type[i].textContent = elements_type[i].getAttribute("data-name")
        }
    }



    document.querySelector(".select").classList.toggle("e") // clase para quitar el gap, select es padre de .number
    document.querySelector(".animate").classList.toggle("opacity1") // .animate es el boton stop

    document.querySelector("#svgPlay").style.fill="var(--color-second)" //cambiamos el btn play a color secundario
    

}





// FUNCION PARA DETENER EL PROCESO 
function stop(){
    corriendo = false // para resetear la variable
    // resetear valores
    hr.value = "00"; 
    min.value = "00";
    seg.value = "00";

    clearInterval(intervalooo); // detener intervalo que ejecuta los segundos
    clearTimeout(timeout)

    // si el contenedor de los .number contiene la clase e ejecutamos la funcion toggle para que quite estilos
    if(document.querySelector(".select").classList.contains("e")){ // usamos if para que solo se ejecute si no los tiene
    toogleINC()
    document.querySelector("#svgPlay").style.fill="var(--color-main)" // regresamos el play a su color normal




    }
}




//NOTA: RESTO DE CODIGO SOBRE EL LIST - TIME ESTA EL LIST.JS