// =========================================
// MY LITTLE RESTAURANT
// GAME JAVASCRIPT
// =========================================


// =========================================
// PLAYER
// =========================================

const player = document.getElementById("player");


// Starting position

let playerX = 430;
let playerY = 410;


// Movement speed

const speed = 3;


// =========================================
// KEYS
// =========================================

const keys = {

    up: false,
    down: false,
    left: false,
    right: false

};


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
// MOVE PLAYER
// =========================================

function movePlayer() {

    let moveX = 0;
    let moveY = 0;


    // Vertical movement

    if (keys.up) {

        moveY -= speed;

    }

    if (keys.down) {

        moveY += speed;

    }


    // Horizontal movement

    if (keys.left) {

        moveX -= speed;

    }

    if (keys.right) {

        moveX += speed;

    }


    // =====================================
    // PREVENT DIAGONAL SPEED BOOST
    // =====================================

    if (
        moveX !== 0 &&
        moveY !== 0
    ) {

        moveX *= 0.707;
        moveY *= 0.707;

    }


    // =====================================
    // APPLY MOVEMENT
    // =====================================

    playerX += moveX;
    playerY += moveY;


    // =====================================
    // RESTAURANT BOUNDARIES
    // =====================================

    const restaurant =
        document.getElementById("restaurant");


    const maxX =
        restaurant.clientWidth -
        player.offsetWidth;


    const maxY =
        restaurant.clientHeight -
        player.offsetHeight;


    // Left boundary

    if (playerX < 0) {

        playerX = 0;

    }


    // Right boundary

    if (playerX > maxX) {

        playerX = maxX;

    }


    // Top boundary

    if (playerY < 0) {

        playerY = 0;

    }


    // Bottom boundary

    if (playerY > maxY) {

        playerY = maxY;

    }


    // =====================================
    // UPDATE POSITION
    // =====================================

    player.style.left =
        playerX + "px";

    player.style.top =
        playerY + "px";

}


// =========================================
// GAME LOOP
// =========================================

function gameLoop() {

    movePlayer();

    requestAnimationFrame(gameLoop);

}


gameLoop();
