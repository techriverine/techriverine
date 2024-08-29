function copyEmail(event) {
    event.preventDefault(); // Prevent the default link behavior

    const email = 'techriverine@gmail.com';

    // Use the modern Clipboard API to copy the email
    navigator.clipboard.writeText(email).then(() => {
        // Show a confirmation message to the user
        const confirmationMessage = document.createElement('div');
        confirmationMessage.textContent = 'Email address copied to clipboard!';
        confirmationMessage.style.position = 'fixed';
        confirmationMessage.style.bottom = '20px';
        confirmationMessage.style.right = '20px';
        confirmationMessage.style.backgroundColor = '#86031E';
        confirmationMessage.style.color = '#FFFFFF';
        confirmationMessage.style.padding = '10px 20px';
        confirmationMessage.style.borderRadius = '5px';
        confirmationMessage.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        confirmationMessage.style.zIndex = '1000';
        document.body.appendChild(confirmationMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
            document.body.removeChild(confirmationMessage);
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy the email address: ', err);
    });
}

function showUnderConstruction(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show an under-construction message to the user
    const underConstructionMessage = document.createElement('div');
    underConstructionMessage.textContent = 'Website is currently under construction. Please check back later!';
    underConstructionMessage.style.position = 'fixed';
    underConstructionMessage.style.bottom = '20px';
    underConstructionMessage.style.right = '20px';
    underConstructionMessage.style.backgroundColor = '#86031E';
    underConstructionMessage.style.color = '#FFFFFF';
    underConstructionMessage.style.padding = '10px 20px';
    underConstructionMessage.style.borderRadius = '5px';
    underConstructionMessage.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    underConstructionMessage.style.zIndex = '1000';
    document.body.appendChild(underConstructionMessage);

    // Remove the message after 3 seconds
    setTimeout(() => {
        document.body.removeChild(underConstructionMessage);
    }, 3000);
}

    document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('welcomePopup');
    var closeBtn = document.getElementById('closePopup');

    // Show the pop-up after a short delay (e.g., 2 seconds)
    setTimeout(function() {
        popup.classList.add('show');
    }, 3500);

    // Close the pop-up when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('show');
    });

    // Optional: Close the pop-up when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});

// JavaScript to Toggle the Side Navigation Menu

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const body = document.body;
    const overlay = document.getElementById('overlay');

    hamburgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        body.classList.toggle('blurred');
        document.querySelector('.side-nav').classList.toggle('show');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        body.classList.remove('blurred');
        document.querySelector('.side-nav').classList.remove('show');
        overlay.classList.remove('show');
    });
});
