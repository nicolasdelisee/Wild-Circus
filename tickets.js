// Fonction de popup et de formulaire de réservation
function popup() {


  Toastify({
    text: "Sent !👍",
    fontSize: "30px",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(90deg, rgba(20,130,118,1) 42%, rgba(36,175,160,1) 100%)",
      width: "10em",
      height: "5em",
      textAlign: "center",
      borderRadius: "30px",
    },
    onClick: function () { } // Callback after click
  }).showToast();
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";



}


function openForm() {
  document.getElementById("popupForm").style.display = "block";
  // document.body.style.opacity = '0.3';
  document.getElementById("overlay").style.display = "block"
  document.getElementsByName("Firstname")[0].value = "";
  document.getElementsByName("Lastname")[0].value = "";
  document.getElementsByName("email")[0].value = "";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}



function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("popupForm").style.display = "none";
}

