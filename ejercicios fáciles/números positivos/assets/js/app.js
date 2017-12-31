
/*Ejerccio:
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo 
con cada elemento multiplicado por 12.
*Solución
se declara una función y se invoca una variable con un arreglo de
4 números positivos, para iterar los elemntos contenidos dentro de la variable se utiliza un bucle for para que que
que recorra cada uno de los valores y dentro del mismo se
invoca la variable declarada antes (nuevo array)a la cual se le aplica
el método push para agregar cada uno los elementos multiplicados por 12.*/


	function getArrayNumerosPositivos(){
	var arr = [5,19,26,34,];

	newArray= [];

	    for(var i = 0; i < arr.length; i++){

	    	newArray.push (arr[i] * 12);
	 						
	 				}
		return newArray;
	}
