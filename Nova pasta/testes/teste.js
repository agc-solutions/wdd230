// const kp1 = document.querySelector("#keyphrase");
// const kp2 = document.querySelector("#keyphrase2");
// const message = document.querySelector("#formmessage");

// kp2.addEventListener("focusout", checkSame);

// // This should be refactored.
// function checkSame() {
// 	if (kp2.value !== kp1.value) {
// 		message.textContent = "❗Key Phrases DO NOT MATCH!";
// 		message.style.visibility = "show";
// 		// kp2.style.backgroundColor = "#fff0f3";
// 		kp2.value = "";
// 		kp2.focus();
//         kp1.value = "";
//         kp1.focus();
// 	} else {
// 		message.style.display = "none";
// 		kp2.style.backgroundColor = "#fff";
// 		kp2.style.color = "#000";
// 	}
// }
// const rangevalue = document.getElementById("rangevalue");
// const range = document.getElementById("r");

// // RANGE event listener
// range.addEventListener('change', displayRatingValue);
// range.addEventListener('input', displayRatingValue);

// function displayRatingValue() {
//     rangevalue.innerHTML = range.value;
// }


function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
      document.getElementById("password-match-error").textContent = "Passwords do not match";
      document.getElementById("username").value = "";
      document.getElementById("confirm-password").value = "";
      document.getElementById("username").focus();
    } else {
      document.getElementById("password-match-error").textContent = "";
    }
  }
  
  document.getElementById("page-rating").addEventListener("input", function() {
    document.getElementById("page-rating-value").textContent = this.value;
  });
 