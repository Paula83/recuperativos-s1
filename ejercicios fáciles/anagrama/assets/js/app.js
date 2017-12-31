/* ejercicio: Dado dos string (palabra1 y palabra2) escribir 
una función para determinar si palabra1 es anagrama de palabra2.
Si es anagrama debe retornar true, en caso contrario false.

*Anagrama: */



function anagrama(palabra1,palabra2){
	if(palabra1.split("").sort().join("") === palabra2.split("").sort().join("")){
	return true
}
 return false;
}
console.log (anagrama("frase","fresa"));
