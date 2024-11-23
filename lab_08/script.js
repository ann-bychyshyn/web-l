function switchFolder(element) {
  const files = element.nextElementSibling;

  if (files.style.display === "none") {
      files.style.display = "block";
  } else {
      files.style.display = "none";
  }
}
