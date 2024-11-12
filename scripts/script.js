// Function to insert <br> if on mobile
function insertBreakOnMobile() {
    const header = document.getElementById('myHeader');
    // Check if the screen width is less than or equal to 768px (mobile)
    if (window.innerWidth <= 768) {
        header.innerHTML = header.innerHTML.replace("Yesterday's lunchbox", "Yesterday's<br>lunchbox");;
    }
}

// Call the function on page load
insertBreakOnMobile();

// Optional: Call the function on window resize to handle dynamic changes
window.addEventListener('resize', insertBreakOnMobile);