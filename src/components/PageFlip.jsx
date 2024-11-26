// DOM elements

const nextBtn = document.querySelector(".next-button");
const prevBtn = document.querySelector(".prev-button");
const Book = document.querySelector(".book");

const page1 = document.querySelector(".page-1");
const page2 = document.querySelector(".page-2");

// Event listener

nextBtn.addEventListener("click", goNextPage);
prevBtn.addEventListener("click", goPrevPage);

// Logic

let currentLocation = 1;
let numOfPages = document.querySelectorAll(".page").length;
let maxLocation = numOfPages + 1;

function openBook() {
  Book.style.transform = "translateX(50%)";
}

function closeBook() {
  Book.style.transform = "translateX(100%)";
}

function returnToOriginal() {
  Book.style.transform = "translateX(0%)";
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        page1.classList.add("flipped");
        page1.style.zIndex = 2;
        break;
      case 2:
        page2.classList.add("flipped");
        page2.style.zIndex = 3;
        closeBook();
        break;
      default:
        alert("unknown");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        returnToOriginal();
        page1.classList.remove("flipped");
        page1.style.zIndex = 3;
        break;
      case 3:
        page2.classList.remove("flipped");
        page2.style.zIndex = 2;
        openBook();
        break;
      default:
        alert("unknown");
    }
    currentLocation--;
  }
}
