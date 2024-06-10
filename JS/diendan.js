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