function Palindromo(){
	var a = palin.value;
// internet explorer no coje el value de palin en los demas funciona
	if (Validar()) {
// nueva funcion para cortar esta y validar si son espacios en blanco
		return true;
// si retorna con espacios en blanco y ninguna letra o numero no sigue
	}
		var amin = a.toLowerCase();
// Todo minusculas
		var espacios =amin.split("");
		var cadenaSinEspacios = "";
// el for elimina espacios en blanco sin usar remplace
	  	for (i in espacios){
	    	if(espacios[i] != " "){
	      	cadenaSinEspacios += espacios[i];
	    }
	  }
	  var frase = cadenaSinEspacios.split('');
	  var fresaReves = cadenaSinEspacios.split("").reverse();
	  var iguales = true;
	  for (i in frase){
	    if (frase[i] == fresaReves[i]){
// si es palindromo sera true saldra por aqui
	    } else {
	      iguales = false
	      break;
// si no es palindromo saldra por aqui
	    }
	  }
	  if (iguales){
	    error.innerHTML = "Es un palíndromo";
	  } else {
	    error.innerHTML = "No es un palíndromo";
	  }
}

/* Otra funcion dentro de la primera para k no sea muy larga y sirve
para validar si es correcto lo introducido o no */
function Validar() {
	var a = palin.value
	if (a == ""){
		error.innerHTML = 'No lo deje en blanco'
		return true;
	} else {
		var a = palin.value.replace(/^\s+|\s+$/g, "");
		if (a == ""){
			error.innerHTML = 'No ponga todo espacios'
			return true;
		} else {
			return false;
		}
	}
}

function quitar(){
	error.innerHTML = '';
	propiedad.innerHTML = '';
	propiedades.innerHTML = '';
}
// funciona correctamente en los exploradores menos en internet explorer
// Fin del ejercicio 1

function mostrar(){
	w3r.href;
	w3r.target;
	w3r.rel;
	w3r.hreflang;
	w3r.type;
	w3r.rel;
	propiedad.innerHTML = 'Las propiedades de la etiqueta &lt;a&gt; son:'
	propiedades.innerHTML = ('<b>Href: </b>' + w3r.href + '<br><b>Target: </b>' + w3r.target + '<br><b>Rel: </b>' + w3r.rel + '<br><b>Hreflang: </b>' + w3r.hreflang + '<br><b>Type: </b>' + w3r.type )
}
// si funciona en todos los navegadores que he probado.
// Fin del ejercicio 2