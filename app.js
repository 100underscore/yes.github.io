// Get the form element
var form = document.getElementById("appointment-form");

// Add a listener to the form's submit event
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent the form from submitting

    // Get the form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;

    // Construct the email body
    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Phone: " + phone + "\n";
    emailBody += "Date: " + date + "\n";
    emailBody += "Time: " + time + "\n";

    // Send the email
    emailjs.send("service_provider", "template_id", {
        to_email: "adisimon69@gmail.com",
        from_name: name,
        from_email: email,
        message_html: emailBody
    });

    // Show a message to the user
    alert("Thank you for your booking! We will contact you soon.");
});