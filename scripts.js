// Функция скрытия навигационного меню в шапке
function functionMenu() {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

// Функция принципа накопления бронирований
function principles() {
  var priceblock = document.getElementById("booking__form-price");
  var probblock = document.getElementById("booking__form-prob");
  var priceinput = document.getElementById("priceinput").value;
  var probinput = document.getElementById("probinput").value;

  if (priceinput > 0 && priceinput <= 10) {
    priceblock.style.width = "50%";
  } else if (priceinput >= 10 && priceinput <= 20) {
    priceblock.style.width = "30%";
  } else {
    priceblock.style.width = "100%";
  }
  if (probinput > 0 && probinput <= 11) {
    probblock.style.width = "25%";
  }
  if (probinput >= 12 && probinput <= 23) {
    probblock.style.width = "50%";
  }
  if (probinput >= 24 && probinput <= 35) {
	probblock.style.width = "75%"
  }
  if (probinput >= 36 && probinput <= 48) {
    probblock.style.width = "100%";
  }
}
