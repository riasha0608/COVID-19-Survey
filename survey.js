document.getElementById("button").onclick = getResult;

function getResult() {
    var counter = 0;
    var checked = true;
    //contact question
    if(document.getElementById('contact_yes').checked) {
        counter += 10;
    }
    else if(document.getElementById('contact_no').checked) {
        counter += 5;
    }
    else {
        checked = false;
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
    else {
        checked = false;
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
    else {
        checked = false;
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
    else {
        checked = false;
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

    var song1 = [];
    song1[0] = new Audio('music/happy.mp3');
    song1[1] = new Audio('music/levitating.mp3');

    var song2 = []
    song2[0] = new Audio('music/on_my_mind.mp3');
    song2[1] = new Audio('music/mixed_personalities.mp3');

    var song3 = []
    song3[0] = new Audio('music/oh_my_god.mp3');
    song3[1] = new Audio('music/heartless.mp3');

    if (counter > 97){
        counter = 97;
    }
    if (!checked){
        alert("Make sure you answer all the multiple choice questions!");
    }
    else {
        var h = document.createElement("h2");
        h.innerHTML = "You have a " + counter + "% chance of having COVID";
        document.body.appendChild(h);
        var index = Math.floor(Math.random() * 2);
        if (counter > 0 && counter < 45) {
            h = document.createElement("h3");
            h.innerHTML = "You most likely don't have COVID, but you could get a rapid test if you would like to make sure :)";
            document.body.appendChild(h);
            // var song = new Audio('music/happy.mp3');
            song1[index].play();
        }
        else if (counter >= 45 && counter < 70) {
            h = document.createElement("h3");
            h.innerHTML = "You have a moderate chance of having COVID, we suggest getting a PCR test and being cautious.";
            document.body.appendChild(h);
            // var song = new Audio('music/mixed_personalities.mp3');
            song2[index].play();
        }
        else if (counter >= 70 && counter <= 97) {
            h = document.createElement("h3");
            h.innerHTML = "You most likely have COVID. Please get both the rapid and PCR test done, and isolate yourself. Feel better!";
            document.body.appendChild(h);
            // var song = new Audio('music/heartless.mp3');
            song3[index].play();
        }
        
        window.scrollTo(0,document.body.scrollHeight);
        document.body.removeChild(document.getElementById("button"));
        
    }
}