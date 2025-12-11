document.getElementById("privacyPolicy").addEventListener("click", function () {
    const targetDiv = document.querySelector('#radix-\\:r3\\:');
    if (targetDiv) {
      targetDiv.style.display = "grid";
    }
    document.getElementById("blackOverlay").style.display = "block";
});

document.getElementById("closePrivacy").addEventListener("click", function () {
    const targetDiv = document.querySelector('#radix-\\:r3\\:');
    if (targetDiv) {
      targetDiv.style.display = "none";
    }
    document.getElementById("blackOverlay").style.display = "none";
});

document.getElementById("terms").addEventListener("click", function () {
    const targetDiv = document.querySelector('#radix-\\:r0\\:');
    if (targetDiv) {
      targetDiv.style.display = "grid";
    }
    document.getElementById("blackOverlay").style.display = "block";
});

document.getElementById("closeTerms").addEventListener("click", function () {
    const targetDiv = document.querySelector('#radix-\\:r0\\:');
    if (targetDiv) {
      targetDiv.style.display = "none";
    }
    document.getElementById("blackOverlay").style.display = "none";
});

document.querySelectorAll(".flex.w-full.items-center.justify-between.p-6.text-left.group").forEach((btn) => {
    btn.addEventListener("click", function () {
      const span = btn.querySelector("span");
      const content = btn.parentElement.querySelector("div");

      // Toggle rotate-45 on the span (icon wrapper)
      span.classList.toggle("rotate-45");

      // Toggle content expansion
      if (content.classList.contains("max-h-0")) {
        content.classList.remove("max-h-0");
        content.classList.add("max-h-96", "pb-6");
      } else {
        content.classList.add("max-h-0");
        content.classList.remove("max-h-96", "pb-6");
      }
    });
  });
