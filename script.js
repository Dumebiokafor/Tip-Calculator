/* script.js */

function calculateTip() {

    // store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    // quick validation
    if(billAmount === "" || serviceQuality == 0) {
        window.alert("please enter some values");
        return; /* prevent function from continuing */
    }

    //check to see if this input is empty or less than equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;

        document.getElementById("each").style.display = "none";
        
    } else {

        document.getElementById("each").style.display = "block";

    }

    // do the maths
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    //display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

//document.getElementById("change").onclick= function() { changeTag(); }; "document.getElementById('demo').innerHTML = 'Hello world'";

// hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// clicking the button calls our custon function
document.getElementById("calculate").onclick = function() { calculateTip(); }; 

