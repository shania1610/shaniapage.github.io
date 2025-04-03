$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();

        $('.error-message').text('');

        let isValid = true;

        const name =
            $('name').val().trim();
        if (name.length === 0) {
            $('#nameError').text('Name is required.')

            isValid = false;
        }

        const email =
            $('email').val().trim();
        const emailPattern =
            /^\S+@\S+\.\s+$/;
        if (!emailPattern.test(email)) {
            $('emailError').text('Please enter a valid email.');
            isValid = false;
        }

        const message =
            $('message').val().trim();
        if (message.length < 10) {
            $('#messageError').text('Message must be at least 10 characters long.');
            isValid = False;
        }

        if (isValid) {
            alert("Thank You! Your message has been sent");
    
            $('contactForm')[0].reset();
        }
    });
});