// =========================================
// MY LITTLE RESTAURANT
// MAIN MENU
// =========================================


// =========================================
// SCREENS
// =========================================

const titleScreen =
    document.getElementById("titleScreen");

const gameScreen =
    document.getElementById("gameScreen");

const customizeScreen =
    document.getElementById("customizeScreen");

const settingsScreen =
    document.getElementById("settingsScreen");


// =========================================
// PLAY
// =========================================

const playButton =
    document.getElementById("playButton");

if (playButton) {

    playButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "game/index.html";

        }
    );

}


// =========================================
// CUSTOMIZE
// =========================================

const customizeButton =
    document.getElementById("customizeButton");

if (customizeButton) {

    customizeButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "character/index.html";

        }
    );

}


// =========================================
// SETTINGS
// =========================================

const settingsButton =
    document.getElementById("settingsButton");

if (settingsButton) {

    settingsButton.addEventListener(
        "click",
        function() {

            titleScreen.classList.add("hidden");

            if (settingsScreen) {

                settingsScreen.classList.remove(
                    "hidden"
                );

            }

        }
    );

}


// =========================================
// SETTINGS BACK
// =========================================

const settingsBackButton =
    document.getElementById(
        "settingsBackButton"
    );

if (settingsBackButton) {

    settingsBackButton.addEventListener(
        "click",
        function() {

            settingsScreen.classList.add(
                "hidden"
            );

            titleScreen.classList.remove(
                "hidden"
            );

        }
    );

}
