const rp = require('request-promise');

const url = "https://rest.coinapi.io/v1/exchangerate/";

// CoinApi key
const key = "99270389-23D4-4084-813C-1B77A1EEAB25";

(function(window, document, undefined){

  // code that should be taken care of right away
  
  window.onload = init;
  
    function init(){
      // Hide dropdown-contents
      let dropdownContents = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdownContents.length; i++) {
        dropdownContents[i].style.display = "none";
      }

      // Add click listeners for dropdowns
      let dropButtons = document.getElementsByClassName('dropbtn');
      for (var i = 0; i < dropButtons.length; i++) {
        let j = i + 1;
        dropButtons[i].addEventListener("click", function(){
          show('dropdown-content' + j);
        })
      }
    }
  
  })(window, document, undefined);

function show(dropDownId) {
    var dropDown = document.getElementById(dropDownId);
    if (dropDown.style.display == "none") {
        dropDown.style.display = "block";
    } else {
        dropDown.style.display = "none";
    }
}

function changeElementText(elementId, text) {
    document.getElementById(elementId).innerHTML = text;
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      if (document.getElementById(dropdowns[i].id).style.display == "block") {
        document.getElementById(dropdowns[i].id).style.display = "none";
      }
    }
  }
}