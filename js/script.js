function init(){
	

	function myEventFunction(){
		var t1 = document.getElementById('entryinput');


		alert("Guangkun Ou:" + t1.value);
		
	}
	var e1 = document.getElementById('entrybutton');
	e1.addEventListener('click', myEventFunction);
	var t2 = document.getElementById('entryinput');

	

}

 







window.addEventListener('load', init);
