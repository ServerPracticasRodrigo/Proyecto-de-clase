/* pagina 1 */
function IniciarSesion () {
    document.getElementById ("IniciarSesion")
    window.location.href = "./IniciarSesion.html"
}
function Registrarte () {
    document.getElementById ("Registrarte")
    window.location.href = "./registrar.html"
}

/* pagina 2 Iniciar Sesion  */

function IraInicio () {
    document.getElementById ("Ir a Inicio")
    window.location.href = "index.html"
}

function IraRegistrar () {
    document.getElementById ("Ir a Registrar")
    window.location.href = "./registrar.html"
}
function IniciandoSesion () {
    

    let cadena = document.getElementById("contra").value;
    let cadena2 = document.getElementById("contra2").value;
    if (cadena == cadena2)
        alert ("Estamos Acessando clic en Aceptar..."),
        document.getElementById ("Iniciando Sesion"),
    window.location.href = "./PagIniciodeSesion.html";
    else
        alert ("Las contraseñas no coinciden");
    alert(nombre);
}

/* pagina 3 Registrarte  */

function IrseaInicio () {
    document.getElementById ("irse a inicio")
    window.location.href = "index.html"
}

function IrseaIniciarSesion () {
    document.getElementById ("irse a iniciar sesion")
    window.location.href = "./IniciarSesion.html"
}

var veces=0;
function IniciandoRegistro(){
let valor1 = document.getElementById("usuario").value;
let valor2 = document.getElementById("clave01").value;
let valor3 = document.getElementById("clave02").value;

let text = document.getElementById("textpantalla");


if (valor2==valor3) 
{
    text.innerHTML= (valor1 + " " + "Su Registro fue exitoso");
    text.style.color="Black";
}
    else if(veces<3)
{
veces++;
text.innerHTML=("Error algunos datos son incorrectos");
text.style.color="black";

}
    return false;
}



/* pagina 4 dentro de sesion */
function Actualizar () {
    document.getElementById ("actualizar")
    window.location.href = "./PagIniciodeSesion.html"
}

function CerrarSesion () {
    document.getElementById ("cerrar sesion")
    window.location.href = "index.html"
}


function Generando(){
let text = document.getElementById("textpantallaf6");

    text.innerHTML= ("¡Cita Generada Exitosamente!");
    text.style.color="Black";
    
    return false;
}

/* el slider */

window.addEventListener('load',function(){
    new Glider(document.querySelector('.carrusel_lista'),
    {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carrusel-indicadores',
        arrows: {
            prev: '.carrusel_anterior',
            next: '.carrusel_siguiente'
        }
    });
});
