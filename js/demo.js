document.querySelectorAll("[data-like]").forEach((button) => {
  button.addEventListener("click", () => {
    const isLiked = button.getAttribute("aria-pressed") === "true";
    const count = button.querySelector("[data-like-count]");
    const label = button.querySelector("[data-like-label]");
    const nextCount = Number(count.textContent) + (isLiked ? -1 : 1);

    button.setAttribute("aria-pressed", String(!isLiked));
    count.textContent = String(nextCount);
    label.textContent = isLiked ? "ถูกใจ" : "เลิกถูกใจ";
  });
});

document.querySelectorAll("[data-comment-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    const comments = document.getElementById(button.getAttribute("aria-controls"));
    const willOpen = comments.hidden;

    comments.hidden = !willOpen;
    button.setAttribute("aria-expanded", String(willOpen));
  });
});

document.querySelectorAll("[data-more-comments]").forEach((button) => {
  button.addEventListener("click", () => {
    const extraComment = button.previousElementSibling;
    if (!extraComment || !extraComment.hasAttribute("data-extra-comment")) return;
    const willShow = extraComment.hidden;

    extraComment.hidden = !willShow;
    button.textContent = willShow ? "ซ่อนความคิดเห็น" : "ดูความคิดเห็นเพิ่มเติม";
  });
});
