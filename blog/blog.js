document.addEventListener('DOMContentLoaded', function () {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            var postList = document.getElementById('post-list');
            posts.forEach(function(post) {
                var listItem = document.createElement('li');
                listItem.className = 'post-title';

                var link = document.createElement('a');
                link.href = post.url;
                link.textContent = post.title;
                link.className = 'post-link';

                listItem.appendChild(link);
                postList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error loading post list:', error);
        });
});
