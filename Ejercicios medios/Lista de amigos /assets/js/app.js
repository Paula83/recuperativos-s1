/*Problema:
Un grupos de amigos van a un evento y sus nombres están dentro de un arreglo.
Escribir una función donde dado el nombre de la persona puedas retornar el
asiento que le toca. La numeración comienza en 1, si la persona no tiene asiento retornar 0.
*/
//Se declara la función
function numero_silla(nombre){
	//instrucciones
	var nombres = [ "Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"];
	for(var i = 0; i < nombres.length; i++){
		if(nombres[i] === nombre){
			return i+1;
		}
	}
	return 0;
}
console.log(numero_silla("Nadia"));