// Calculate price
function calculation(){
	var val = 0;
	var radioConf = document.getElementsByName('configuration');
	var radioRAM = document.getElementsByName('ram');
	var radioBt = document.getElementsByName('battery');
	var radioExt = document.getElementsByName('extras');
	
	for (var i = 0, length = radioConf.length; i < length; i++) {
		if (radioConf[i].checked) {
			val+=parseInt(radioConf[i].value);
			break;
		}
	}
	for (var i = 0, length = radioRAM.length; i < length; i++) {
		if (radioRAM[i].checked) {
			val+= parseInt(radioRAM[i].value);
			break;
		}
	}
	for (var i = 0, length = radioBt.length; i < length; i++) {
		if (radioBt[i].checked) {
			val+=parseInt(radioBt[i].value);
			break;
		}
	}
	for (var i = 0, length = radioExt.length; i < length; i++) {
		if (radioExt[i].checked) {
			val+=parseInt(radioExt[i].value);
		}
	}
	
	
	document.getElementById('txt').value=val + "$";
	
	
}
