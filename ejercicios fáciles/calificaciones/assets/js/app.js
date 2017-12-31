/* Diseñar un programa que lea las calificaciones de un alumno
 (10 notas en total). Debes calcular e imprimir su promedio, y 
 decir a través de un alert si el ramo fue aprobado o no. Las notas 
 van de 1 a 7 y se aprueba con un promedio igual o mayor a 4.
 *Solución:

	*/
	var n1= parseInt(prompt("Ingresa la nota #1"));
	var n2= parseInt(prompt("Ingresa la nota #2"));
	var n3= parseInt(prompt("Ingresa la nota #3"));
	var n4= parseInt(prompt("Ingresa la nota #4"));
	var n5= parseInt(prompt("Ingresa la nota #5"));
	var n6= parseInt(prompt("Ingresa la nota #6"));
	var n7= parseInt(prompt("Ingresa la nota #7"));
	var n8= parseInt(prompt("Ingresa la nota #8"));
	var n9= parseInt(prompt("Ingresa la nota #9"));
	var n10= parseInt(prompt("Ingresa la nota #10"));

function calificacionesAlumnos(){
	var promedio = (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)/10;
	if (promedio >= 4){
		alert("Felicitaciones,has aprobado el ramo + promedio");
	}else{
		alert("No aprobaste, no te desanimes que puedes lograrlo" + promedio);
	}return promedio;
}


function getPromedioCalificacionesAlumnos(numeroNotas){
	var arrayNotas = [];
	var sumaNotas = 0;
	var nota= 0;

	for (var i = 0; i < numeroNotas; i++) {
		var nota = parseInt(prompt("Ingresa la nota #" +(i+1)));
		arrayNotas.push(nota);
	}

	for (var i = 0; i < arrayNotas.length; i++) {
			sumaNotas = sumaNotas + arrayNotas[i];
	}

	promedio = sumaNotas/arrayNotas.length;

			if(promedio >= 4){
				alert("Felicitaciones, has aprobado el ramo, tu promedio es de" + " "+promedio);	
			} else{
					alert("No aprobaste, no te desanimes que puedes lograrlo, tu promedio fue" + " "+promedio);
			}

			return promedio;
}