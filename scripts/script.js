// Function to insert <br> if on mobile
function insertBreakOnMobile() {
    const header = document.getElementById('mainHeader');
    // Check if the screen width is less than or equal to 768px (mobile)
    if (window.innerWidth <= 768) {
        header.innerHTML = header.innerHTML.replace("Yesterday's lunchbox", "Yesterday's<br>lunchbox");;
    }
}

// Call the function on page load
insertBreakOnMobile();

// Call the function on window resize to handle dynamic changes
window.addEventListener('resize', insertBreakOnMobile);

// Function to load posts dynamically
const postList = ['be-still-announcement.html', 'wheres-the-music.html'];
const postContainer = document.getElementById('posts');

Promise.all(
  postList.map(postFile => 
    fetch(`pages/posts/${postFile}`).then(res => res.text())
  )
).then(htmlArray => {
  htmlArray.forEach(html => {
    const div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = html;
    postContainer.appendChild(div);
  });
}).catch(err => console.error('Failed to load posts:', err));