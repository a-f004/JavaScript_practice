"use strict";

{
  const options = {
    threshold: 0.5,
    rootMargin: "-12%",
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll(".fade_show");

  targets.forEach((target) => observer.observe(target));

  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }
}
