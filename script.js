const toggleMenu = () => document.body.classList.toggle("open");

$("#menubar").mouseleave(function () {
  document.body.classList.remove("open");
});
