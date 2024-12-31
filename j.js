document.getElementById('experience-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        addPost(title, description);
        
        // Clear form fields
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }
});

function addPost(title, description) {
    const postContainer = document.getElementById('posts-container');
    
    const post = document.createElement('div');
    post.classList.add('post');
    
    const postTitle = document.createElement('h3');
    postTitle.innerText = title;
    
    const postDescription = document.createElement('p');
    postDescription.innerText = description;
    
    post.appendChild(postTitle);
    post.appendChild(postDescription);
    
    postContainer.appendChild(post);
}
