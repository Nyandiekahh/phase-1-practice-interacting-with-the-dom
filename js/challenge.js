document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    const likeButton = document.getElementById('heart');
    const likesList = document.querySelector('.likes');
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    const commentForm = document.getElementById('comment-form');
    const likes = {};
    let count = 0;
    let interval;

    function updateCounter() {
        count++;
        counter.innerText = count;
    }

    function updateLikes() {
        likesList.innerHTML = '';
        for (let num in likes) {
            const li = document.createElement('li');
            li.textContent = `${num} has ${likes[num]} likes`;
            likesList.appendChild(li);
        }
    }

    plusButton.addEventListener('click', () => {
        count++;
        counter.innerText = count;
    });

    minusButton.addEventListener('click', () => {
        count--;
        counter.innerText = count;
    });

    likeButton.addEventListener('click', () => {
        likes[count] = (likes[count] || 0) + 1;
        updateLikes();
    });

    pauseButton.addEventListener('click', () => {
        clearInterval(interval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.innerText = 'resume';
        pauseButton.id = 'resume';
    });

    resumeButton.addEventListener('click', () => {
        interval = setInterval(updateCounter, 1000);
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.innerText = 'pause';
        pauseButton.id = 'pause';
    });

    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentText = commentInput.value;
        const commentItem = document.createElement('div');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    });

    // Initially start the counter
    interval = setInterval(updateCounter, 1000);
});
