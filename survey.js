document.getElementById("button").onclick = getResult;

function getResult() {
    var counter = 0;
    //contact question
    if(document.getElementById('contact_yes').checked) {
        counter += 10;
    }
    else if(document.getElementById('contact_no').checked) {
        counter += 5;
    }

    //vaccination question
    if(document.getElementById('vax_one').checked) {
        counter += 7;
    }
    else if(document.getElementById('vax_two').checked) {
        counter += 5;
    }
    else if(document.getElementById('vax_booster').checked) {
        counter += 3;
    }
    else if(document.getElementById('vax_no').checked) {
        counter += 8;
    }

    //places question
    if(document.getElementById('public_places_little').checked) {
        counter += 3;
    }
    else if(document.getElementById('public_places_small').checked) {
        counter += 6;
    }
    else if(document.getElementById('public_places_medium').checked) {
        counter += 8;
    }
    else if(document.getElementById('public_places_large').checked) {
        counter += 10;
    }

    //mask question
    if(document.getElementById('mask_yes').checked) {
        counter += 6;
    }
    else if(document.getElementById('mask_no').checked) {
        counter += 9;
    }
    
    //meals question
    if(document.getElementById('meals_home').checked) {
        counter += 0;
    }
    else if(document.getElementById('meals_ppOthers').checked) {
        counter += 7;
    }
    else if(document.getElementById('meals_ppLonely').checked) {
        counter += 4;
    }

    //symptoms questions
    if(document.getElementById('fever').checked) {
        counter += 12;
    }
    if(document.getElementById('muscle_aches').checked) {
        counter += 7;
    }
    if(document.getElementById('nv').checked) {
        counter += 9;
    }
    if(document.getElementById('cr').checked) {
        counter += 4;
    }
    if(document.getElementById('chills').checked) {
        counter += 8;
    }
    if(document.getElementById('headache').checked) {
        counter += 3;
    }
    if(document.getElementById('diarrhea').checked) {
        counter += 6;
    }
    if(document.getElementById('cough').checked) {
        counter += 4;
    }
    if(document.getElementById('nls').checked) {
        counter += 14;
    }
    if(document.getElementById('nlt').checked) {
        counter += 13;
    }
    if(document.getElementById('sore_throat').checked) {
        counter += 5;
    }
    if(document.getElementById('fatigue').checked) {
        counter += 11;
    }
    if(document.getElementById('sob').checked) {
        counter += 10;
    }
    alert ("counter: " + counter);
}