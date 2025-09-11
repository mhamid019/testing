const myBtn = document.querySelector("#myBtn");
let wrap1 = document.querySelector(".wrap1");
myBtn.addEventListener("click", function() {
    wrap1.classList.toggle("add-bg-color");
});
