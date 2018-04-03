var array = []
var eded = document.querySelector("#daxil");
var boyuk = document.querySelector("#max");
var button = document.querySelector("#duyme");

button.onclick = function() {
	var a = +eded.value;
	array.push(a);
	if (a > boyuk.value){

		boyuk.value=a;
	}
	alert("Elave edildi");
}
