welcomeMessage();

// Welcome Message Function 
function welcomeMessage() {
   // Show Popup
   let name = prompt("Welcome to Stark Industries! What is your name?");

   // Validasi Input 
   if (name == null || name.trim() === "") { 
    // if user cancels or enters an empty name, use "Guest" as default 
    name = "Guest"; 
   }

   //    Display Welcome Message 
   document.getElementById('welcome-speech').innerHTML = 'Hello, ${name}! Welcome to Stark Industries.';
}

function validateForm() { }