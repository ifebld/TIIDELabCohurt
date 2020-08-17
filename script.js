window.onload = function () {
	

	//Get a reference to the submit button
	var submitButton = document.getElementById("submitButton");

	//Attach the submit function to the click event of the button
	submitButton.onclick = submit;

}


function submit() {


	console.log("Submitted");

	//Collect form values
	var fullname =  document.getElementById("fullname").value;
	var email =  document.getElementById("email").value;
	var username =  document.getElementById("username").value;
	var password =  document.getElementById("password").value;
	var confirmpassword =  document.getElementById("confirmpassword").value;

	if(fullname != "" && email != "" && username != "" && password != "" && confirmpassword != ""){

		//are the passwords the same?
		if(password === confirmpassword){
			//Submit the form
			var data = {
				"fullName" : fullname,
				"email" : email,
				"userName" : username,
				"newpassword" : password,
				"isEnabled" : true,
				"roles" : ["user"]
			}

			console.log(data)

			fetch("https://api.openclass.ng/Register", {
				method : "POST",
				body : JSON.stringify(data), //Converts object (data) to a string (text)
				headers : {
					'Content-Type' : "application/json"
				}
			}).then((response) => {
				console.log(response);
				alert("You have been successfully registered");
			})


		}else{
			alert("Passwords do not match")
		}
		
	}else{

		alert("All fields are required")
	}

	


	
}