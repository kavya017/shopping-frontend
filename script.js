let v1 = document.getElementsByClassName("burger")[0];
let v2 = document.getElementById("cross");
v1.addEventListener("click", () => {
  document.getElementById("navbar").classList.add("activv");
});
v2.addEventListener("click", () => {
  document.getElementById("navbar").classList.remove("activv");
});
