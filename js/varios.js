/*
* Función: muestra
* Objetivo: llena la información para el examen y muestra tabla y botón
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function muestra(sValor, oTbl, oElemento){
var nTabla=0, i=0;
var oLinea;
var oCeldaOpe, oCeldaRes, oCeldaCal;

var oCtrl;
var oCtrl2;
	if (isNaN(sValor))
		alert("Debe elegir la tabla de multiplicar");
	else{
		nTabla = parseInt(sValor, 10);
		if (oElemento != null){
			oElemento.style.visibility = "visible";

			if (oTbl != null){
				//Si la tabla está llena, vaciarla primero
				if (oTbl.rows.length>1){
					for (i=1; i<=10; i++)
						oTbl.deleteRow(-1);
				}

				//Colocar operaciones y campos para resultado en la tabla
				for (i=1; i<=10; i++){
					oLinea = oTbl.insertRow(-1);
					oCeldaOpe = oLinea.insertCell(0);
					oCeldaRes = oLinea.insertCell(1);
					oCeldaCal=oLinea.insertCell(2);
					oCeldaOpe.innerHTML = nTabla + " * " + i;


					oCtrl = document.createElement("input");
					oCtrl.type="text";
					oCtrl.id = "txtResultado"+i;
					oCeldaRes.appendChild(oCtrl);

					oCeldaCal.innerHTML =  " ok " ;

					oCtrl2 = document.createElement("text");
					//oCtrl2.type="text";
					oCtrl2.id="Ok"+i;
					oCeldaCal.appendChild(oCtrl2);


				}
			}
		}
	}
}

/*
* Función: califica
* Objetivo: verifica las respuestas capturadas en cada celda de la tabla
* Parámetros: recibe el valor de la base (es cadena), el identificador de la tabla visual y el elemento a mostrar
*/
function califica(sValor, oTbl,oCeldaCal){
var nTabla=0, i=0, nCapturado=0, nCalif=0;
var sValorCapturado="", sErr="";
var sValorCal="";
	if (isNaN(sValor))
		sErr = "Debe elegir la tabla de multiplicar";
	else{
		nTabla = parseInt(sValor, 10);

		//Recorrer los campos si ya están pintados
		if (oTbl.rows.length>1){
			for (i=1; i<=10; i++){
				sValorCapturado = document.getElementById("txtResultado"+i).value;
				if (isNaN(sValorCapturado))
					sErr = sErr + "Error de captura en el resultado "+i + "\n";
				else{
					nCapturado = parseInt(sValorCapturado,10);
					if (nCapturado == (nTabla*i)){
						nCalif++;
						//sValorCal=document.getElementById("Ok"+i).style="border: 4px solid #4bf510; background-color: #4bf510";
						//sValorCal=document.getElementById("Ok"+i).style="background-color: #4bf510 ";
							sValorCapturado = document.getElementById("txtResultado"+i).style="border: 4px solid #4bf510; background-color: #4bf510";
                        }else if (nCapturado != (nTabla*i))
							sValorCapturado = document.getElementById("txtResultado"+i).style="border: 4px solid red; background-color: red";
					}
				}
			}

		}
    document.getElementById("calif").style.visibility = "visible";
	if (sErr == "")
		document.getElementById("calif").innerHTML= "Calificación = "+nCalif;
	else
		alert(sErr);
}



/*Funciones fecha signo zodiacal*/
function validaFechaMenor(campo){
  var bRet=false;
  if (campo.value == "")
    alert("Faltan datos");
  else
    bRet=validaFecha(campo.value);

  return bRet;
}

  function validaFecha(valor){
      var dConvertida = null;
      var sAnio = "";
      var sMes = "";
      var sDia = "";
      var nAnio=0, nMes=0, nDia = 0;

      if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        nDia = parseInt(valor.substring(8,10), 10);
        nMes = parseInt(valor.substring(5,7), 10);
        nAnio = parseInt(valor.substring(0,4), 10);

        //alert("dia: "+nDia+" Mes: "+nMes+" Año: "+nAnio);

        if(nDia<1)
          nDia=nDia*-1;
        else if(nMes<1)
          nMes=nMes*-1;

        if (nDia <1 || nDia>31)
          alert("El día no es válido")
        else{
          if (nMes <1 || nMes>12)
            alert("El mes no es válido");
          else{
            if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
               nMes==8 || nMes==10 || nMes==12) && nDia > 31)
               alert("El mes tiene máximo 31 días");
            else if ((nMes==4 || nMes==6 || nMes==9 ||
                  nMes==11) && nDia > 30)
               alert("El mes tiene máximo 30 días");
            else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
               alert("Febrero tiene 28 días o 29 en bisiesto");
            else{
              dConvertida = new Date();
              dConvertida.setFullYear(nAnio, nMes-1, nDia);
            }//fin validaci�n día-mes
          }//mes válido
        }//día válido
        //creasigno(nDia,nMes);
      }//formato válido

      else
        alert("No tiene formato de fecha");


      var dHoy = new Date();

      if (dConvertida != null && dConvertida < dHoy){
        creasigno(nDia,nMes);
        return true;
      }else{
          alert("La fecha debe ser menor a la fecha actual");
          return false;
      }
  }


  function creasigno(nDia,nMes){

  //var newDiv = document.createElement("div");
  var color;
  var fontcolor="black";
  if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
  var newContent = document.createTextNode("SIGNO ARIES\nNúmero de la Suerte: 14");
   color = "salmon";
  }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
    var newContent = document.createTextNode("SIGNO TAURO\nNúmero de la Suerte: 79");
     color = "lightpink";
  }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
      var newContent = document.createTextNode("SIGNO GEMINIS\nNúmero de la Suerte: 25");
       color = "orangered";
    }else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
        var newContent = document.createTextNode("SIGNO CANCER\nNúmero de la Suerte: 46");
         color = "gold";
      }else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
          var newContent = document.createTextNode("SIGNO LEO\nNúmero de la Suerte: 18");
           color = "violet";
        }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
            var newContent = document.createTextNode("SIGNO VIRGO\nNúmero de la Suerte: 20");
             color = "seagreen";
          }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
              var newContent = document.createTextNode("SIGNO LIBRA\nNúmero de la Suerte: 68");
               color = "purple";
            }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                var newContent = document.createTextNode("SIGNO ESCORPIO\nNúmero de la Suerte: 57");
                 color = "royalblue";
              }else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                  var newContent = document.createTextNode("SIGNO SAGITARIO\n\n\nNúmero de la Suerte: 42");
                   color = "indigo";
                }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                    var newContent = document.createTextNode("SIGNO CAPRICORNIO\nNúmero de la Suerte: 34");
                     color = "maroon";  fontcolor="#fff";
                  }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                      var newContent = document.createTextNode("SIGNO ACUARIO\nNúmero de la Suerte: 81");
                       color = "silver";
                    }else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                        var newContent = document.createTextNode("SIGNO PISCIS\nNúmero de la Suerte: 7");
                         color = "aqua";
                      }

  //var newContent = document.createTextNode("SIGNO");
  //newDiv.appendChild(newContent); //añade texto al div creado.
  //newDiv.style="border: 3px solid #999999; background-color:"+color+"; color:"+fontcolor+"; width: 200px ;height:150px ";


   var currentDiv = document.getElementById("signo");
   currentDiv.style="border: 3px solid black; background-color:"+color+"; color:"+fontcolor+"; width: 200px ;height: 50px ";
   currentDiv.appendChild(newContent);
   var ch = currentDiv.childNodes;
   currentDiv.replaceChild(newContent, ch[0]);

}