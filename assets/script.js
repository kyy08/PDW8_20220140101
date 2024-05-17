document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("booking-form");
    const confirmationSection = document.getElementById("confirmation");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const tourPackage = formData.get("tour-package");
        const additionalServices = formData.getAll("additional-service");

        const message = `
            <p>Thank you, ${name}, for booking a ${tourPackage} tour at TourCampNou.</p>
            <p>We will send a confirmation email to ${email} shortly.</p>
            <p>Additional Services: ${additionalServices.join(", ")}</p>
        `;

        confirmationMessage.innerHTML = message;
        confirmationSection.style.display = "block";
    });
});