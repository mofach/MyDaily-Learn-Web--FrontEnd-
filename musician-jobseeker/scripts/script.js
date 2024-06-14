let slideIndexes = [];
let slideshows = document.querySelectorAll(".slideshow-container");

// Ambil elemen-elemen yang akan dimanipulasi
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector('.search-box input[type="text"]');
const searchButton = document.querySelector(".search-box button");

// Interaksi pengguna saat melakukan pencarian
searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== "") {
    alert("Anda mencari: " + searchTerm);
    // Di sini Anda bisa menambahkan logika untuk menampilkan hasil pencarian
  } else {
    alert("Harap masukkan kata kunci pencarian.");
  }
});

// Initialize slideIndexes for each slideshow
slideshows.forEach((_, index) => {
  slideIndexes[index] = 0;
});

// Function to show slides automatically
function showSlidesAutomatically() {
  slideshows.forEach((slideshow, slideshowIndex) => {
    let slides = slideshow.getElementsByClassName("mySlides");

    // Hide all slides
    Array.from(slides).forEach((slide) => {
      slide.style.opacity = "0";
    });

    // Update slide index
    slideIndexes[slideshowIndex]++;
    if (slideIndexes[slideshowIndex] > slides.length) {
      slideIndexes[slideshowIndex] = 1;
    }

    // Show the current slide
    slides[slideIndexes[slideshowIndex] - 1].style.opacity = "1";
  });

  // Change image every 3 seconds
  setTimeout(showSlidesAutomatically, 3000);
}


// Highlight active section in the navigation menu
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("article");
  const navLinks = document.querySelectorAll(".nav-list li a");

  let currentSectionIndex = 0;
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      currentSectionIndex = index;
    }
  });

  // Remove active class from all nav links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Add active class to the current nav link
  navLinks[currentSectionIndex].classList.add("active");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Toggle responsive navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Add event listener for search button click
document.querySelectorAll(".search-box button").forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.parentElement.querySelector('input[type="text"]');
    const searchTerm = input.value.trim();

    if (searchTerm === "") {
      alert("Please enter a search term!");
      return;
    }

    // Perform search or other actions with the search term
    console.log("Search term:", searchTerm);
  });
});

// Add event listener for pressing Enter in the search input
document.querySelectorAll('.search-box input[type="text"]').forEach((input) => {
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = input.value.trim();

      if (searchTerm === "") {
        alert("Please enter a search term!");
        return;
      }

      // Perform search or other actions with the search term
      console.log("Search term:", searchTerm);
    }
  });
});
