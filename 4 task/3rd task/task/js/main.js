var array = [5, 4, 6, 7, 9]
var cem = 0;
var kvadrat = 1;
i=0;
while (i<=array.length-1){
	kvadrat= array[i]*array[i];
	cem += kvadrat;
	i++;
}
console.log(cem);