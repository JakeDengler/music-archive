<link rel="stylesheet" href="about.css"></link>

function dropdownFunction() {
  document.getElementById("dropdownid").classList.toggle("showitem");
}
window.onclick = function() {
  if (!e.target.matches('.dropmenu')) {
  var myDropdown = document.getElementById("dropdownid");
    if (myDropdown.classList.contains('showitem')) {
      myDropdown.classList.remove('showitem');
    }
  }
}