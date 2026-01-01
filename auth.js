import { signInWithPopup }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

window.googleLogin = function () {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "app.html";
    })
    .catch(error => {
      document.getElementById("msg").innerText = error.message;
    });
};
