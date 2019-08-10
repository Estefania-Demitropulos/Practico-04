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

var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var indicadorDeColor = document.getElementById('indicador-de-color');
var mouseClickeado;

function crearPaletaColores (arrayColores){
  for (var i = 0; i <= arrayColores.length; i++){
    var div = document.createElement('div');
    div.style.backgroundColor = arrayColores[i];
    div.className = 'color-paleta';
    div.addEventListener('click', seleccionarColor);//va al indicador de color
    paleta.appendChild(div);
  };
}
crearPaletaColores(nombreColores);

function crearGrillaPixeles (){
  for (var i = 0; i < 1750; i++){
    var pixeles = document.createElement('div');
    pixeles.addEventListener('mousedown', pintarPixel); //va a la grilla pixeles
    pixeles.addEventListener('mouseup', function(){
      mouseClickeado = false;
    });
    pixeles.addEventListener('mouseover', pincel);
    grillaPixeles.appendChild(pixeles);
  };
}
crearGrillaPixeles();

function seleccionarColor (e){
  var colorSeleccionado = e.target.style.backgroundColor;
  indicadorDeColor.style.backgroundColor = colorSeleccionado;
};

function pintarPixel (e){
  var pixelPintado = indicadorDeColor.style.backgroundColor;
  e.target.style.backgroundColor = pixelPintado;
  mouseClickeado = true;
}

function pincel (e){
  if(mouseClickeado === true){
    pintarPixel(e);
  };
};

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColor.style.backgroundColor = colorActual;

  })
);

var botonBorrar = $('#borrar');
botonBorrar.click(function(){
  $('#grilla-pixeles div').animate({"backgroundColor": "#ffffff"}, 600);
});

var heroeBatman = document.getElementById('batman');
heroeBatman.addEventListener('click', function(){
  cargarSuperheroe(batman);
});

var heroeWonderWoman = document.getElementById('wonder');
heroeWonderWoman.addEventListener('click', function(){
  cargarSuperheroe(wonder);
});

var heroeFlash = document.getElementById('flash');
heroeFlash.addEventListener('click', function(){
  cargarSuperheroe(flash);
});

var heroeMujerInvisible = document.getElementById('invisible');
heroeMujerInvisible.addEventListener('click', function(){
  cargarSuperheroe(invisible);
});

var guardarArte = document.getElementById('guardar');
guardarArte.addEventListener('click', function (){
  guardarPixelArt();
});