let heartIcon = document.querySelector(".icon-box .bx-heart");
let heartIconRed = document.querySelector(".icon-box .fa-heart");
let likes = document.querySelector('.icons-likes .likes p');
let count = 0;


heartIcon.addEventListener("click", function () {
    heartIcon.style.display = "none";
    heartIconRed.style.display = "block";
    count++;
    likes.innerHTML = count + " likes";
    likes.style.display = 'block';

});

heartIconRed.addEventListener("click", function () {
    heartIconRed.style.display = "none";
    heartIcon.style.display = "block";
    count--;
    if (count < 1) {
        likes.style.display = 'none';
    }

    else if (count > 1) {
        likes.innerHTML = count + " likes";
    }
});




