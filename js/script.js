let heartIcon = document.querySelector(".icon-box .bx-heart");
let heartIconRed = document.querySelector(".icon-box .fa-heart");

heartIcon.addEventListener("click", function () {
    heartIcon.style.display = "none";
    heartIconRed.style.display = "block";
});

heartIconRed.addEventListener("click", function () {
    heartIconRed.style.display = "none";
    heartIcon.style.display = "block";
});