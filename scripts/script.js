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

function loadPosts(postUrls) {
    const wrapper = document.getElementById('post-wrapper');
    postUrls.forEach(url => {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Network response was not ok");
                return response.text();
            })
            .then(html => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';
                postDiv.innerHTML = html;
                wrapper.appendChild(postDiv);
            })
            .catch(err => console.error('Error loading post:', url, err));
    });
}

loadPosts([
    'pages/posts/be-still-announcement.html',
    'pages/posts/test-post.html'
]);