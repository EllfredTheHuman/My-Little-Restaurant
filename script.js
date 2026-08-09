/* =========================================
   MY LITTLE SHOP
   MAIN MENU
========================================= */


const titleScreen =
    document.getElementById("titleScreen");

const gameScreen =
    document.getElementById("gameScreen");

const settingsScreen =
    document.getElementById("settingsScreen");


const playButton =
    document.getElementById("playButton");

const customizeButton =
    document.getElementById("customizeButton");

const settingsButton =
    document.getElementById("settingsButton");


const backButton =
    document.getElementById("backButton");

const settingsBackButton =
    document.getElementById("settingsBackButton");


/* =========================================
   PLAY
========================================= */

playButton.addEventListener("click", function () {

    titleScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");

});


/* =========================================
   CUSTOMIZE
========================================= */

customizeButton.addEventListener("click", function () {

    window.location.href = "character/index.html";

});


/* =========================================
   SETTINGS
========================================= */

settingsButton.addEventListener("click", function () {

    titleScreen.classList.add("hidden");

    settingsScreen.classList.remove("hidden");

});


/* =========================================
   GAME BACK
========================================= */

backButton.addEventListener("click", function () {

    gameScreen.classList.add("hidden");

    titleScreen.classList.remove("hidden");

});


/* =========================================
   SETTINGS BACK
========================================= */

settingsBackButton.addEventListener("click", function () {

    settingsScreen.classList.add("hidden");

    titleScreen.classList.remove("hidden");

});
