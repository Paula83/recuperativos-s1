
	/* ejercicio
	Dado un arreglo de 10 números, retornar un nuevo arreglo solo 
	con los números pares.*/
	/*Solución:
	inicialmente se declara una variable con un arreglo que contiene 10 números,
	se utliza un ciclo for el cual itera cada elemento del arreglo, 
	*/

  var arr = [3,4,8,10,12,15,20,48,50,67]

	function getArrayNumerosPares(){

	arrayPares = [];

	    for(var i = 0; i < arr.length; i++){

	 				if(arr[i] % 2 === 0){
	 						arrayPares.push(arr[i]);
	 				}
	 	
			}	
		return arrayPares;
	}

