window.addEventListener("DOMContentLoaded", function() {
 
	//alert("javascript is working");

	var submitButton = document.getElementById("submit");
	var emailField = document.getElementById("InputEmail");
	alert(emailField.value);

	submitButton.onclick = function(event){
	    event.preventDefault();
	    alert(emailField.value);
	};

	var pillArray = document.querySelectorAll(".nav-pills li a");

	for (i = 0; i < pillArray.length) {
		pillArray[i].onclick = function() {
			event.preventDefault();
			alert("You clicked it");
		}
	}

	console.log(pillArray);

})