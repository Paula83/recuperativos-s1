/*Dado un arreglo de números positivos, retornar true si este se
encuentra ordenado de menor a mayor, en caso contrario false.
No puede usar el método sort() de javascript.
Solución: se declara una variable global con un arreglo de números positivos, y una función que recibe
como parámetros un array de números positivos, se aplica un for que me iterará el array, luego con un if 
comparo los elementos, una vez comparados deben retornar true si se encentra ordenado de menor a mayor, y en caso
contrario me retornará false.
una vez comparado los elementos  */

var arrNumPositivos = [4,2,3,1];
function isOrdenadoMenorMayor(arrNumPositivos){
	for (var i = 0; i < arrNumPositivos.length -1; i++) {
				if(arrNumPositivos[i] < arrNumPositivos[i+1]){
				}
				else{
					return false;
				}
	}
	return true;
}

