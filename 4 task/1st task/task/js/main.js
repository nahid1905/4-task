var birincieded = document.querySelector("#first");
var ikincieded = document.querySelector("#second");
var select= document.querySelector("#select");
var netice =  document.querySelector("#netice");
var button = document.querySelector("#hesabla");

button.onclick = function()
{
	var a = +birincieded.value;
	var b = +ikincieded.value;
	var op = select.value;
	if(op=="+"){
	 netice.value = a + b;
	}
	if(op=="-"){
	 netice.value = a - b;
	}
	if(op=="*"){
	 netice.value = a * b;
	}
	if(op=="/"){
	 netice.value = a / b;
	}
}



