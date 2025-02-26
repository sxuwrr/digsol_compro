document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.2 }
  ); // 20% of the element must be visible before triggering

  images.forEach((img) => observer.observe(img));
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.fade-left');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 200); // Delay each image by 200ms
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    },
    { threshold: 0.2 }
  ); // Trigger when 20% of the image is visible

  images.forEach((img) => observer.observe(img));
});
