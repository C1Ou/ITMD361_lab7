function init(){
	

	function myEventFunction(){
		var t1 = document.getElementById('entryinput');
		var t2 = document.getElementById('textoutput');


		alert("Guangkun Ou:" + t1.value);
		t2.innerHTML = t1.value;
		
	}
	var e1 = document.getElementById('entrybutton');
	e1.addEventListener('click', myEventFunction);
	
	
}


window.addEventListener('load', init);
