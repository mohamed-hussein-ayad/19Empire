let allLis = document.querySelectorAll(".nav-link");
allLis.forEach(function (ele) {
  ele.onclick = function () {
    allLis.forEach(function (ele) {
      ele.classList.remove("active-link");
    });
    this.classList.add("active-link");
  };
});
