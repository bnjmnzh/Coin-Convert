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

      // Add click listeners for buttons
      let dropButtons = document.getElementsByClassName('dropbtn');
      for (var i = 0; i < dropButtons.length; i++) {
        let j = i + 1;
        dropButtons[i].addEventListener("click", function(){
          show('dropdown-content' + j);
        })
      }
      
      // Add click listeners for Select Currency
      let selCurr = document.getElementsByClassName("selectCurr");
      for (var i = 0; i < selCurr.length; i++) {
        let j = i +1;
        selCurr[i].addEventListener("click", function(){
          changeElementText('dropButton' + j, "Select Currency");
        })
      }

      // Add click listeners for cad
      let cad = document.getElementsByClassName('cad');
      for (var i = 0; i < cad.length; i++) {
        let j = i +1;
        cad[i].addEventListener("click", function(){
          changeElementText('dropButton' + j, "CAD");
        })
      }

      // Add click listeners for usd
      let usd = document.getElementsByClassName('usd');
      for (var i = 0; i < usd.length; i++) {
        let j = i +1;
        usd[i].addEventListener("click", function(){
          changeElementText('dropButton' + j, "USD");
        })
      }

      // Add click listeners for eur
      let eur = document.getElementsByClassName('eur');
      for (var i = 0; i < eur.length; i++) {
        let j = i +1;
        eur[i].addEventListener("click", function(){
          changeElementText('dropButton' + j, "EUR");
        })
      }

      // Add click listeners for aud
      let aud = document.getElementsByClassName('aud');
      for (var i = 0; i < usd.length; i++) {
        let j = i +1;
        aud[i].addEventListener("click", function(){
          changeElementText('dropButton' + j, "AUD");
        })
      }

      // Add click listeners for crypto
      document.getElementById("btc").addEventListener("click", function() {
        changeElementText('dropButton3', "BTC");
      })

      document.getElementById("eth").addEventListener("click", function() {
        changeElementText('dropButton3', "ETH");
      })

      document.getElementById("xrp").addEventListener("click", function() {
        changeElementText('dropButton3', "XRP");
      })

      document.getElementById("bch").addEventListener("click", function() {
        changeElementText('dropButton3', "BCH");
      })

      // Add click listener for calculate buttons
      document.getElementById("calculate1").addEventListener("click", function() {
        var curr1 = document.getElementById("dropButton1").innerHTML;
        var curr2 = document.getElementById("dropButton2").innerHTML;
        var curr3 = document.getElementById("dropButton3").innerHTML;
        if (curr3 == "Select Currency") {
          // Convert currencies in curr1 and curr2
          if (curr1 == "Select Currency") {
            console.log("Missing 1st currency type");
            return;
          }
          if (curr2 == "Select Currency") {
            console.log("Missing 2nd currency type");
            return;
          }
          convertCurr(curr1, curr2);
        } else {
          // Convert currencies in curr1 / curr2 into curr3
          if (curr1 != "Select Currency") {
            convertToCrypto(curr1, curr3);
          } else if (curr2 != "Select Currency") {
            convertToCrypto(curr2, curr3);
          } else {
            console.log("Missing currencies to convert");
          }
        }
      })

      document.getElementById("calculate2").addEventListener("click", function() {
        var base1 = document.getElementById("dropButton1").innerHTML;
        var base2 = document.getElementById("dropButton2").innerHTML;
        var crypto = document.getElementById("dropButton3").innerHTML;
        if (crypto == "Select Currency") {
          console.log("Missing 3rd currency type");
          return;
        }

        if (base1 != "Select Currency") {
          convertFromCrypto(1, base1, crypto);
        } else {
          console.log("Missing 1st currency type");
        }

        if (base2 != "Select Currency") {
          convertFromCrypto(2, base2, crypto);
        } else {
          console.log("Missing 2nd currency type");
        }
      })
    }
  
  })(window, document, undefined);

async function convertCurr(base, expected) {
  let amount = document.getElementById("curr1").value;
  if (amount != "") {
    const body = await rp(url + base + "/" + expected + "?apikey=" + key);
    let responseJSON = JSON.parse(body);
    document.getElementById("curr2").value = (amount * responseJSON.rate).toFixed(4) + "";
  } else {
    console.log("Missing values to convert");
  }
}

async function convertFromCrypto(form, base, crypto) {
  let amount = document.getElementById("curr3").value;
  if (amount != "") {
    const body = await rp(url + base + "/" + crypto + "?apikey=" + key);
    let responseJSON = JSON.parse(body);
    document.getElementById("curr" + form).value = (amount / responseJSON.rate).toFixed(4) + "";
  }
  else {
    console.log("Missing value to convert");
  }
}

async function convertToCrypto(base, crypto) {
  let amount = document.getElementById("curr1").value;
  if (amount == "") {
    amount = document.getElementById("curr2").value;
  }
  if (amount != "") {
    const body = await rp(url + base + "/" + crypto + "?apikey=" + key);
    let responseJSON = JSON.parse(body);
    document.getElementById("curr3").value = (amount * responseJSON.rate).toFixed(8) + "";
  }
  else {
    console.log("Missing value to convert");
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