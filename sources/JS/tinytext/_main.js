function tinytexttype(){
	let sele = document.getElementById('tinytext_select0');
	let i = sele.selectedIndex;
	let type = sele.options[i].value;
	console.log(type);
}
document.getElementById('tinytext_select0').onchange = tinytexttype;
function randoms() {
	// body...
}