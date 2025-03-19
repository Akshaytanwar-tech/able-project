// how it works toggle

// document.querySelectorAll(".how-it-works-toggle").forEach((button) => {
//   button.addEventListener("click", () => {
//     const content = button.nextElementSibling;
//     const isActive = button.classList.contains("how-it-works-active");

//     document
//       .querySelectorAll(".how-it-works-toggle")
//       .forEach((btn) => btn.classList.remove("how-it-works-active"));
//     document
//       .querySelectorAll(".how-it-works-content")
//       .forEach((cnt) => cnt.classList.add("how-it-works-hidden"));

//     if (!isActive) {
//       button.classList.add("how-it-works-active");
//       content.classList.remove("how-it-works-hidden");
//     }
//   });
// });


// Accordian togger
function toggleAccordion(header) {
  const content = header.nextElementSibling;
  const symbol = header.querySelector(".symbol");
  const isOpen = content.style.display === "block";

  // Close all contents and reset symbols
  document.querySelectorAll(".accordion-content").forEach((item) => {
    item.style.display = "none";
    item.previousElementSibling.classList.remove("active");
  });
  document.querySelectorAll(".accordion-header .symbol").forEach((item) => {
    item.textContent = "+";
  });

  // Open the selected content and update symbol
  if (!isOpen) {
    content.style.display = "block";
    header.classList.add("active");
    symbol.textContent = "-";
  }
}
// Counter for the numbers

document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("counter1", 0, 22, 500);
  counter("counter2", 0, 98, 500);
  counter("counter3", 1800, 2000, 100);
  counter("counter4", 0, 150, 500);
});

// crousel 1 :- the industries we server

var splide1 = new Splide("#crousel1", {
  type: "loop",
  perPage: 2,
  focus: "center",
  omitEnd: true,
  pagination: false,
  padding: { left: "10%", right: "10%" },
  gap: "10px",
});

splide1.mount();

// crousel 2 :- Quote

var splide2 = new Splide("#quotes-slider", {
  type: "loop",
  rewind: true,
  pagination: false,
});

splide2.mount();
