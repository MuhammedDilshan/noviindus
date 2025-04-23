const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // Close all open items
    accordionItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current item
    item.classList.toggle("active");
  });
});
