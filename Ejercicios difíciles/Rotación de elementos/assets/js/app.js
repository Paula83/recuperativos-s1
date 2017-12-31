/*Ejercicio:
Dado un arreglo de números rotar sus elementos hacia la derecha n veces.
solución:
 inicialmente se declaro una función que tiene como parámetros un array y el numero de reotaciones
 despues se definieron dos variables la primera guarda la segunda variable guardará las nuevas posiciones de los
 elementos rotados, una vez definidas la variables se aplica un for el cual me recorre el tamaño de los
 elementos para saber las posisicones que se van a rotar, luego se crea una variable donde se almacena el resulatdo de las nuevas posiciones;
 se invoca inicialmente una condicional donde se le dice que si la nueva posicion es menor a 0, el valor de la nueva posicioón va ser igula a la posición
 anterior + el tamaño del array,
 la segunda condición si el tamaño de la nueva posición es igual al tamaño de la array entonces la nueva posición va hacer 0,
 la tercera condición le decimos, si la nueva posición es mayor al tamaño del array y mientras (while) lo siga siendo 
 se le va a restar a la nueva posición el tamaño de la array hasta que sea menor a esta, una vez cumplida las condicones retornaremos el array rotado.
*/

function rotarElentosArray(array, numRotaciones){

	var arrayRotado = [];
	var nuevaPosicion = 0;

	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);

		nuevaPosicion = (i+numRotaciones)-array.length;
		
		if(nuevaPosicion < 0){
			nuevaPosicion = nuevaPosicion + array.length;
		}

		if(nuevaPosicion == array.length){
			nuevaPosicion = 0;
		}

		if(nuevaPosicion > array.length){
			while(nuevaPosicion > array.length){
				nuevaPosicion = nuevaPosicion - array.length;
						if(nuevaPosicion == array.length){
								nuevaPosicion = 0;
						}
			}
		}

		arrayRotado[nuevaPosicion] = array[i];
	}
	return arrayRotado;
}