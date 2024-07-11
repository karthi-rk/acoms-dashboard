$(document).ready(function () {
    if (!isLoggedIn()) {
        // Redirect to login page if not authenticated
        // window.location.href = 'admin/sign-in.html';
    }

    // Logout functionality (assuming the user is logged in)
    $('#logout').click(function (event) {
        event.preventDefault(); // Prevent the link from navigating

        // Perform logout actions here (e.g., clearing session, redirecting to login page)
        // For simplicity, just redirect to the login page
        window.location.href = 'admin/sign-in.html';
    });
})

// Function to check if user is logged in (you can replace this with actual authentication logic)
function isLoggedIn() {
    // Example: Check if a session variable or localStorage indicates the user is logged in
    // For simplicity, assume a localStorage flag 'isLoggedIn'
    return localStorage.getItem('isLoggedIn') === 'true';
}