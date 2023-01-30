
function principles(){

	var price = document.getElementById('booking__form-price');
	var prob = document.getElementById('booking__form-prob');

	var a = document.getElementById('priceinput').value;
	var b = document.getElementById('probinput').value;

	if(a > 0 && a <= 10){
		price.style.width = "50%";
	}
	else if(a >= 10 && a <= 20){
		price.style.width = "30%";
	}
	else{
		price.style.width = "100%";
	}

	if(b > 0 && b <= 5){
		prob.style.width = "30%";
	}
	if(b >= 5 && b <= 10){
			prob.style.width = "50%";
		}
	if(b >= 10 && b <= 15){
			prob.style.width = "100%";
		}

}