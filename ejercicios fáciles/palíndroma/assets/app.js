	/*Realizar un programa que permita analizar si una palabra que el usuario introduce por teclado es palíndroma o no.
	Si es palíndroma debe retornar true, en caso contrario false.*/
	//solución:
  //se declara una función que recibe como parámetro un texto.
	function palindromo(text){
	/*/ se declara una variable con el nombre invertir que recibe como datos:
	//un método split con un string vacio, que me devolvera un nuevo arreglo.
	//el método reverse = nos devolvera el valor invertido.
	//el método join = nos unira los elementos del arreglo.
	una vez definida nuestra variable aplicamos una sentencia if
	 para analizar la condición para ejecutar el código.

	*/
	var invertir = text.split("").reverse().join("");
	if(invertir === text){
		return true;
	} else{
		return false;
	}
  palindromo("oso");
}
