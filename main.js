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

      // Add click listerners drop dropdown elements
      let sel = document.getElementsByClassName('selectCurr');
      for (var i = 0; i < sel.length; i++) {
        let j = i + 1;
        sel[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "Select Currency");
        })
      }
      let cad = document.getElementsByClassName('cad');
      for (var i = 0; i < cad.length; i++) {
        let j = i + 1;
        cad[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "CAD");
        })
      }

      let usd = document.getElementsByClassName('usd');
      for (var i = 0; i < usd.length; i++) {
        let j = i + 1;
        usd[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "USD");
        })
      }

      let btc = document.getElementsByClassName('btc');
      for (var i = 0; i < btc.length; i++) {
        let j = i + 1;
        btc[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "BTC");
        })
      }
      
      let eth = document.getElementsByClassName('eth');
      for (var i = 0; i < eth.length; i++) {
        let j = i + 1;
        eth[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "ETH");
        })
      }

      let xrp = document.getElementsByClassName('xrp');
      for (var i = 0; i < xrp.length; i++) {
        let j = i + 1;
        usd[i].addEventListener("click", function(){
          changeElementText("dropButton" + j, "XRP");
        })
      }

      // Add click listener for convert button
      let calculate = document.getElementById('calculate');
      calculate.addEventListener("click", convertCurrency);
    }
  
  })(window, document, undefined);

async function convertCurrency() {
   let curr1 = document.getElementById('dropButton1').innerHTML;
   let curr2 = document.getElementById('dropButton2').innerHTML;
   if (curr1 == "Select Currency" || curr2 == "Select Currency") {
     return;
   }
   
   let amount1 = document.getElementById('input1').value;
   let amount2 = document.getElementById('input2').value;
   if (amount1 != "") {
    // Convert from 1 to 2 (Default)
    const body = await rp(url + curr1 + "/" + curr2 + "?apikey=" + key);
    let responseJSON = JSON.parse(body);
    document.getElementById('input2').value = (amount1 * responseJSON.rate).toFixed(8) + "";
   } else if (amount2 != "") {
    // Convert from 2 to 1
    const body = await rp(url + curr2 + "/" + curr1 + "?apikey=" + key);
    let responseJSON = JSON.parse(body);
    document.getElementById('input1').value = (amount2 * responseJSON.rate).toFixed(8) + "";
   } else {
     console.log("No values to convert");
   }
}  

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