function init(){
	

	function myEventFunction(){
		var t1 = document.getElementById('entryinput');
		alert("ma");
		t1.value = 'Guangkun Ou:';
	}
	var e1 = document.getElementById('entrybutton');
	e1.addEventListener('click', myEventFunction);

}

 







window.addEventListener('load', init);
