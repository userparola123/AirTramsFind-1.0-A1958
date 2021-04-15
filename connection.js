var connectionFailed = document.getElementById("connectionFailed")

window.addEventListener("online", function() {
    connectionFailed.style.display = "none";
  });
  
  window.addEventListener("offline", function() {
    connectionFailed.style.display = "block";
  });