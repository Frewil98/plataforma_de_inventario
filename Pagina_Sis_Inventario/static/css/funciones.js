//Ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click",open_close_menu);
// declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

// Evento para mostrar y ocultar menú
function open_close_menu(){
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side__move")
}

// si ancho de pagina es menor a 760px, ocultara el menú
if(window.innerWidth < 760){
  body.classList.add("body_move");
  side_menu.classList.add("menu__side__move");
}

//haciendo menú responsive
window.addEventListener("resize",function(){
 
  if (window.innerList > 760){
    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side__move");
  }

  if (window.innerList < 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__side__move");
  }
});