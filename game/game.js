// =========================================
// MY LITTLE RESTAURANT
// GAME JAVASCRIPT
// =========================================


const player =
    document.getElementById("player");


// =========================================
// POSITION
// =========================================

let playerX = 430;
let playerY = 410;


// =========================================
// MOVEMENT
// =========================================

const speed = 3;

const keys = {
    up: false,
    down: false,
    left: false,
    right: false
};


// =========================================
// WALK ANIMATION
// =========================================

let walking = false;

let stepTimer = 0;

let step = false;


// =========================================
// KEY DOWN
// =========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "w" ||
            event.key === "W" ||
            event.key === "ArrowUp"
        ) {

            keys.up = true;

            event.preventDefault();

        }


        if (
            event.key === "s" ||
            event.key === "S" ||
            event.key === "ArrowDown"
        ) {

            keys.down = true;

            event.preventDefault();

        }


        if (
            event.key === "a" ||
            event.key === "A" ||
            event.key === "ArrowLeft"
        ) {

            keys.left = true;

            event.preventDefault();

        }


        if (
            event.key === "d" ||
            event.key === "D" ||
            event.key === "ArrowRight"
        ) {

            keys.right = true;

            event.preventDefault();

        }

    }
);


// =========================================
// KEY UP
// =========================================

document.addEventListener(
    "keyup",
    function(event) {

        if (
            event.key === "w" ||
            event.key === "W" ||
            event.key === "ArrowUp"
        ) {

            keys.up = false;

        }


        if (
            event.key === "s" ||
            event.key === "S" ||
            event.key === "ArrowDown"
        ) {

            keys.down = false;

        }


        if (
            event.key === "a" ||
            event.key === "A" ||
            event.key === "ArrowLeft"
        ) {

            keys.left = false;

        }


        if (
            event.key === "d" ||
            event.key === "D" ||
            event.key === "ArrowRight"
        ) {

            keys.right = false;

        }

    }
);


// =========================================
// MOVEMENT
// =========================================

function movePlayer() {

    let moveX = 0;
    let moveY = 0;


    if (keys.up) {
        moveY -= speed;
    }

    if (keys.down) {
        moveY += speed;
    }

    if (keys.left) {
        moveX -= speed;
    }

    if (keys.right) {
        moveX += speed;
    }


    // Prevent diagonal speed boost

    if (
        moveX !== 0 &&
        moveY !== 0
    ) {

        moveX *= 0.707;

        moveY *= 0.707;

    }


    playerX += moveX;
    playerY += moveY;


    // =====================================
    // BOUNDARIES
    // =====================================

    const restaurant =
        document.getElementById(
            "restaurant"
        );


    const maxX =
        restaurant.clientWidth -
        player.offsetWidth;


    const maxY =
        restaurant.clientHeight -
        player.offsetHeight;


    if (playerX < 0) {
        playerX = 0;
    }


    if (playerX > maxX) {
        playerX = maxX;
    }


    if (playerY < 0) {
        playerY = 0;
    }


    if (playerY > maxY) {
        playerY = maxY;
    }


    // =====================================
    // APPLY POSITION
    // =====================================

    player.style.left =
        Math.round(playerX) + "px";

    player.style.top =
        Math.round(playerY) + "px";


    // =====================================
    // WALKING
    // =====================================

    const isMoving =
        moveX !== 0 ||
        moveY !== 0;


    if (isMoving) {

        if (!walking) {

            walking = true;

            stepTimer = 0;

        }


        stepTimer++;


        if (stepTimer >= 10) {

            stepTimer = 0;

            step = !step;

        }


        player.classList.add("walking");


        if (step) {

            player.classList.add(
                "step-two"
            );

        } else {

            player.classList.remove(
                "step-two"
            );

        }

    } else {

        walking = false;

        stepTimer = 0;

        step = false;

        player.classList.remove(
            "walking"
        );

        player.classList.remove(
            "step-two"
        );

    }

}


// =========================================
// GAME LOOP
// =========================================

function gameLoop() {

    movePlayer();

    requestAnimationFrame(
        gameLoop
    );

}


gameLoop();
