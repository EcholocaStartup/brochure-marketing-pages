// ============Heart icons============//

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

}

);

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
}

);


// ============Comment Box============//
let submitBtn = document.querySelector("#customer-comments form .btn");
let form = document.querySelector("#customer-comments form");
let inputComment = document.querySelector("#customer-comments form .col-9");

inputComment.addEventListener("click", function () {
    form.classList.add("active");
})

inputComment.addEventListener("change", function () {
    form.classList.remove("active");
})



// let comments = document.querySelector("#customer-comments .comments>p");
// comments.style.color = "green"
