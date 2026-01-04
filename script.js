const faqItems = document.querySelectorAll(".faqitem");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faqanswer");
  const icon = item.querySelector(".icon img");

  question.addEventListener("click", () => {
    const isOpen = answer.style.display === "block";

    // Close all FAQs
    faqItems.forEach(other => {
      other.querySelector(".faqanswer").style.display = "none";
      other.querySelector(".icon img").src = "assets/images/icon-plus.svg";
    });

    // Open clicked FAQ
    if (!isOpen) {
      answer.style.display = "block";
      icon.src = "assets/images/icon-minus.svg";
    }
  });
});
