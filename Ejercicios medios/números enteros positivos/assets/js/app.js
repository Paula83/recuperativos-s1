/* Ejerccio: Dado un arreglo de números enteros positivos,
se necesita detectar si están en orden ascendente
(menor a mayor). Si es así, nuestra función debe retornar true,
en caso contrario false. (Puede usar método sort())--> El método sort() ordena los elementos de un array
localmente y devuelve el array
*Solución:
se declara una variable con un arreglo de números enteros positivos, y una función que recibe
como parámetros un array de numeros incocada inicialmente, se aplica un for que me recorra el array, luego aplico
un if que me permita comparar los elementos del areeglo,y una vez comparados los elementos, al llamarlos me
deben retornar true si se encentran ordenados de menor a mayor, de los contrario me retornará false.
una vez comparado los elementos
*/

	var arrNumbEnterosPositivos=[6,7,1,5,3];

	 function myArrayOrdenado (arrNumbEnterosPositivos){
	 arrNumbEnterosPositivos.sort();
    
		for (var i = 0; i < arrNumbEnterosPositivos.length -1; i++) {
						if(arrNumbEnterosPositivos[i] < arrNumbEnterosPositivos[i+1]){
						}
						else{
							return false;
						}
			}
			return true;
	}




