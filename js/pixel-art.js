var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

var superheroe = ['batman', 'wonder', 'flash', 'invisible'];

// Variable para guardar el elemento 'color-personalizado'. Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener('change', (function() {
  colorActual = colorPersonalizado.value; // Se guarda el color de la rueda en colorActual
  indicadorColor.style.backgroundColor = colorActual; // Completar para que cambie el indicador-de-color al colorActual
}));

//Genero paleta de pinceles
var paleta = document.getElementById('paleta');

function generarPaletaColores() {
  for (var i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    paleta.appendChild(nuevoDiv);
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.style.backgroundColor = nombreColores[i];
  }
}

//Genero grilla de pixeles
var grillaPixeles = document.getElementById('grilla-pixeles');

function generarGrillaPixeles() {
  for (var i = 0; i < 1751; i++) {
    var nuevoPixel = document.createElement('div');
    grillaPixeles.appendChild(nuevoPixel);
  }
}

//jQuery
$(document).ready(function() {

  //Borrar grilla de pixeles
  $("#borrar").click(function() {
    var $nuevoPixel = $("#grilla-pixeles").children().animate({
      "background-color": "white"
    }, 1000);
  });

  //Cargar superhéroes
  $("ul li img").click(function() {
    var $id = $(this).attr("id");
    switch ($id) {
      case "batman":
        cargarSuperheroe(batman);
        break;
      case "wonder":
        cargarSuperheroe(wonder);
        break;
      case "flash":
        cargarSuperheroe(flash);
        break;
      case "invisible":
        cargarSuperheroe(invisible);
        break;
    }
  });

  //Exportar imagen de Pixel Art a PC de usuario
  $("#guardar").click(guardarPixelArt);
});

//Funcion para seleccionar color del pincel
var indicadorColor = document.getElementById('indicador-de-color');
var colorSeleccionado = indicadorColor.style.backgroundColor
paleta.addEventListener('click', seleccionarColor);

function seleccionarColor(e) {
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}

//Función para pintar pixeles con mouse
var mouseApretado; //variable que guarda el estado del mouse: apretado o no

grillaPixeles.addEventListener('click', pintar);
grillaPixeles.addEventListener("mousedown", presionarMouse);
grillaPixeles.addEventListener("mouseup", soltarMouse);
grillaPixeles.addEventListener("mousemove", muevoMouse);

function pintar(e) {
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

function presionarMouse() {
  mouseApretado = true;
}

function soltarMouse() {
  mouseApretado = false;
}

function muevoMouse(e) {
  if (mouseApretado) {
    pintar(e);
  }
}

// Ejecución de las funciones
generarPaletaColores();
generarGrillaPixeles();
seleccionarColor();
pintar();
