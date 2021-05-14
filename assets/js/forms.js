// Ticket Booking and contact form Functions
// Form data email function created with info from course videos
function sendMail(contactForm) {
    emailjs.send("gmail", "culture-night", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "booking_request": contactForm.tickets.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

