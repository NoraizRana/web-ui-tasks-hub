
const testimonials = [
  { text: "“These guys are top-notch. The site was beyond expectations!”", author: "Alex Johnson" },
  { text: "“Fast, creative and professional. Highly recommend!”", author: " Maria Gomez" },
  { text: "“Delivered exactly what I wanted. Amazing work!”", author: "Liam Brown" }
];

let index = 0;

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  document.getElementById("testimonialText").textContent = testimonials[index].text;
  document.getElementById("testimonialAuthor").textContent = testimonials[index].author;
}

function openModal() {
  document.getElementById("contactModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("contactModal").classList.add("hidden");
}

document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
