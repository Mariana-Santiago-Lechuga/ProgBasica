function InvocarScript(){
    // Al cargarse el archivo JavaScript, se muestra un mensaje
alert("Hola Mundo!");

// Despues del primer mensaje, se muestra otro mensaje seguido
alert("Soy el primer script");

}

function Mostrar(){
  var mensaje = "Hola Mundo! \n Qué facil es incluir \'comillas simples\' \n y \"comillas dobles\" ";
  alert(mensaje);
}
function Meses(){
    // Array que almacena los 12 meses del año
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Se muestra el nombre de cada mes
alert(meses[0]);
alert(meses[1]);
alert(meses[2]);
alert(meses[3]);
alert(meses[4]);
alert(meses[5]);
alert(meses[6]);
alert(meses[7]);
alert(meses[8]);
alert(meses[9]);
alert(meses[10]);
alert(meses[11]);
}

function Operadores(){
    var valores = [true, 5, false, "hola", "adios", 2];

// Cual de los 2 elementos de texto es mayor
// Si el resultado es true, el primer texto es mayor
var resultado = valores[3] > valores[4];
alert(resultado);

// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];

// Obtener un resultado TRUE
var resultado = valor1 || valor2;
alert(resultado);

// Obtener un resultado FALSE
resultado = valor1 && valor2;
alert(resultado);

// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
alert(suma);

var resta = num1 - num2;
alert(resta);

var multiplicacion = num1 * num2;
alert(multiplicacion);

var division = num1 / num2;
alert(division);

var modulo = num1 % num2;
alert(modulo);
}
 function IF() {
     var numero1 = 5;
var numero2 = 8;

if(numero1 <= numero2) {
  alert("numero1 no es mayor que numero2");
}
if(numero2 >= 0) {
  alert("numero2 es positivo");
}
if(numero1 < 0 || numero1 != 0) {
  alert("numero1 es negativo o distinto de cero");
}
if(++numero1 < numero2) {
  alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
 }

function Datos() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de tu Indentificaci\u00f3n (sin la letra)");// \u00f3 para la ó acentuada en UNICODE
var letra = prompt("Introduce la letra de tu Indentificaci\u00f3n (en may\u00fasculas)"); // \u00fa para la ú acentuada en UNICODE
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el n\u00famero proporcionados no son correctos");
  }
  else {
    alert("El n\u00famero de tu Indentificaci\u00f3n y su letra son correctos");
  }
}

} 
function Factorial (){
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;
 
for(var i=1; i<=numero; i++) {
  resultado *= i;
    
}
  document.getElementById('resultado').innerHTML = resultado; 
}

function FuncionEnFuncion(){
     var numero = prompt("Introduce un número entero");
          var resultado = parImpar(numero);
          alert("El número "+numero+" es "+resultado);

          function parImpar(numero) {
            if(numero % 2 == 0)   return "par";
            else   return "impar";
            }
}

function info(cadena) {

  var resultado = "La cadena \""+cadena+"\" ";

  // Comprobar mayúsculas y minúsculas
  if(cadena == cadena.toUpperCase())
     resultado += " está formada sólo por mayúsculas";
  else if(cadena == cadena.toLowerCase())
          resultado += " está formada sólo por minúsculas";
      else
    resultado += " está formada por mayúsculas y minúsculas";
return resultado;
}

function Cadena(){
  alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
  alert(info("En un lugar de la mancha..."));
  alert(info("aprendiendo javascript..."));
}


function palindromo(cadena) {

  var resultado = "La cadena \""+cadena+"\" \n";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios)
    if(letrasEspacios[i] != " ")
          cadenaSinEspacios += letrasEspacios[i];

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras)
    if(letras[i] != letrasReves[i])
         iguales = false;


  if(iguales)
    resultado += " es un palíndromo";
  else
    resultado += " no es un palíndromo";
  return resultado;
}
function InfoPalindromo(){
document.getElementById("frase1").innerHTML = palindromo("La ruta nos aporto otro paso natural");
  document.getElementById("frase2").innerHTML = palindromo("Esta frase no se parece a ningun palindromo");
}

function valida(campo){
			var bRet = false;
			if (campo.value == "")
				document.getElementById("validacion").innerHTML = "Faltan datos";
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					document.getElementById("validacion").innerHTML = "No tiene formato de RFC";
				else
					bRet = true;
			return bRet;
}

function DOM(){
     //Obtiene un elemento  del HTML a través de su id "información" para agregar mensajes
  var info = document.getElementById("informacion");

  // Obtiene el número de enlaces de la pagina a través de su tag "a"
  var enlaces = document.getElementsByTagName("a");

  // crea un mensaje para ser visualizado en el HTML:
  info.innerHTML = "Numero de enlaces = "+enlaces.length;

  // Direccion del penultimo enlace
  var mensaje = "El pen&uacute;ltimo enlace apunta a: "+enlaces[enlaces.length-2].href;

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://prueba
  var contador = 0;

  for(var i=0; i<enlaces.length; i++)
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
        if(enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/")
                contador++;

// agrega infomación al mensaje para ser visualizado en el HTML:
info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

// Numero de enlaces del tercer párrafo
  var parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a"); // [2] para el tercer párrafo

  // agrega infomación al mensaje para ser visualizado en el HTML:
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = "+enlaces.length;
}

function muestra() {
  var elemento = document.getElementById("adicional");
  elemento.className = "visible";

  var enlace = document.getElementById("enlace");
  enlace.className = "visible";

  var enlace1 = document.getElementById("enlace1");
  enlace.className = "oculto";

}


function muestraOculta(id) {
	  var elemento = document.getElementById('contenidos_'+id);
	  var enlace = document.getElementById('enlace_'+id);

	  if(elemento.style.display == "" || elemento.style.display == "block") {
	    elemento.style.display = "none";
	    enlace.innerHTML = 'Mostrar contenidos';
	  }
	  else {
	    elemento.style.display = "block";
	    enlace.innerHTML = 'Ocultar contenidos';
	  }
	}


function agregaLinea(){
			var oTbl = document.getElementById("tblUno");
			var oLin = oTbl.insertRow(-1);
			var oCelda1 = oLin.insertCell(0);
			var oCelda2 = oLin.insertCell(1);

			oCelda1.innerHTML = "Celda";
			oCelda2.innerHTML = 'Texto y campo ' +
			'<input type="text" name="campo"/>';
		}

		function eliminaLinea(){
			var oTbl = document.getElementById("tblUno");
			oTbl.deleteRow(1);
		}

contador=3;
function anade() {
    
  var elemento = document.createElement("li");
  var lista = document.getElementById("lista");
  var nuevoElemento = "<li>Elemento "+(++contador)+"</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}

























