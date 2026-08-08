// ========================================
// MY LITTLE SHOP
// ========================================


// Screens

const titleScreen =
    document.getElementById("titleScreen");

const gameScreen =
    document.getElementById("gameScreen");

const customizeScreen =
    document.getElementById("customizeScreen");

const settingsScreen =
    document.getElementById("settingsScreen");


// Buttons

const playButton =
    document.getElementById("playButton");

const customizeButton =
    document.getElementById("customizeButton");

const settingsButton =
    document.getElementById("settingsButton");

const backButton =
    document.getElementById("backButton");

const customizeBackButton =
    document.getElementById("customizeBackButton");

const settingsBackButton =
    document.getElementById("settingsBackButton");


// ========================================
// SCREEN FUNCTION
// ========================================

function showScreen(screen) {

    titleScreen.classList.add("hidden");
    gameScreen.classList.add("hidden");
    customizeScreen.classList.add("hidden");
    settingsScreen.classList.add("hidden");

    screen.classList.remove("hidden");
}


// ========================================
// PLAY
// ========================================

playButton.addEventListener("click", function() {

    showScreen(gameScreen);

});


// ========================================
// CUSTOMIZE
// ========================================

customizeButton.addEventListener("click", function() {

    showScreen(customizeScreen);

});


// ========================================
// SETTINGS
// ========================================

settingsButton.addEventListener("click", function() {

    showScreen(settingsScreen);

});


// ========================================
// BACK BUTTONS
// ========================================

backButton.addEventListener("click", function() {

    showScreen(titleScreen);

});


customizeBackButton.addEventListener("click", function() {

    showScreen(titleScreen);

});


settingsBackButton.addEventListener("click", function() {

    showScreen(titleScreen);

});
