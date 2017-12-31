	/*Dado un arreglo de números positivos, encontrar el elemento más pequeño y retornar su índice.
	*Solución: iniclamente se declara una variable que contiene un array de números, luego se invica una función
	que recibira como parametros números positivos.
	*/


	var arrNumerosPositivos= [6,5];

	function isEncontrarElementoMenor(arrNumerosPositivos){

		var arrayMenores= [];// guarda el primer elemento del array.

		arrayMenores[0] = arrNumerosPositivos[0]; //almacena los valor que se pasen.
		
		arrayMenores[1] = 0; //almacenara los elemnetos de la posición.

		for(var i=0; i < arrNumerosPositivos.length -1; i++){ //el for itinerará cada elemento del array para encontrar el valor más pequeño

			if(arrayMenores[0] < arrNumerosPositivos[i+1]){ //se 
				}
				else{
					arrayMenores[0] = arrNumerosPositivos[i+1];
					arrayMenores[1] = i+1;
				}
		}
		return arrayMenores[1];
	}