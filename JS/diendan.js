function searchStory() {
    var input, filter, storyList, stories, story, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toLowerCase();
    storyList = document.getElementById("story-list");
    stories = storyList.getElementsByClassName('story-item');

    for (i = 0; i < stories.length; i++) {
        story = stories[i];
        txtValue = story.textContent || story.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            story.classList.add("visible");
            story.style.display = "block";
        } else {
            story.classList.remove("visible");
            story.style.display = "none";
        }
    }
}
function postComment() {
    var usernameInput = document.getElementById('username-input').value;
    var commentInput = document.getElementById('comment-input').value;
    var commentsList = document.getElementById('comments-list');

    var commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    var commentText = document.createElement('p');
    commentText.innerHTML = '<strong>' + usernameInput + ':</strong> ' + commentInput;


    commentContainer.appendChild(commentText);
    commentsList.appendChild(commentContainer);


    document.getElementById('username-input').value = '';
    document.getElementById('comment-input').value = '';
}
