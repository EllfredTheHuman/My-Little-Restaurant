// =========================================
// MY LITTLE RESTAURANT
// GAME JAVASCRIPT
// =========================================


// =========================================
// PLAYER
// =========================================

const player = document.getElementById("player");

const canvas = document.getElementById("playerCanvas");

const ctx = canvas.getContext("2d");


// Make every pixel stay sharp

ctx.imageSmoothingEnabled = false;


// =========================================
// LOAD CHARACTER
// =========================================

const savedCharacter =
    localStorage.getItem(
        "myLittleShopCharacter"
    );


let character = {

    hair: 0,
    shirt: 0,
    pants: 0,
    shoes: 0,
    accessory: 0

};


if (savedCharacter) {

    try {

        const loaded =
            JSON.parse(savedCharacter);

        character = {

            hair:
                typeof loaded.hair === "number"
                    ? loaded.hair
                    : 0,

            shirt:
                typeof loaded.shirt === "number"
                    ? loaded.shirt
                    : 0,

            pants:
                typeof loaded.pants === "number"
                    ? loaded.pants
                    : 0,

            shoes:
                typeof loaded.shoes === "number"
                    ? loaded.shoes
                    : 0,

            accessory:
                typeof loaded.accessory === "number"
                    ? loaded.accessory
                    : 0

        };

    }

    catch (error) {

        console.log(
            "Could not load character."
        );

    }

}


// =========================================
// CHARACTER OPTIONS
// =========================================

const hairColours = [

    "#70462e", // Brown
    "#292321", // Black
    "#e6bd55", // Blonde
    "#b85b31", // Ginger
    "#4c82bd", // Blue
    "#d7659b"  // Pink

];


const shirtColours = [

    "#4d91d1", // Blue
    "#d95757", // Red
    "#55a862", // Green
    "#e5bd4f", // Yellow
    "#9464c0", // Purple
    "#df8247"  // Orange

];


const pantsColours = [

    "#3d5d91", // Blue
    "#292f4a", // Black
    "#765039", // Brown
    "#737a80", // Grey
    "#46734f"  // Green

];


const shoeColours = [

    "#50382c", // Brown
    "#292522", // Black
    "#eeeeee", // White
    "#b84242"  // Red

];


// =========================================
// CHARACTER COLOURS
// =========================================

const hairColour =
    hairColours[character.hair];

const shirtColour =
    shirtColours[character.shirt];

const pantsColour =
    pantsColours[character.pants];

const shoeColour =
    shoeColours[character.shoes];


// =========================================
// PIXEL DRAWING
// =========================================

function pixel(
    x,
    y,
    width,
    height,
    colour
) {

    ctx.fillStyle = colour;

    ctx.fillRect(
        x,
        y,
        width,
        height
    );

}


// =========================================
// DRAW CHARACTER
// =========================================

function drawCharacter() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // =====================================
    // SKIN
    // =====================================

    const skin =
        "#f3bd88";

    const outline =
        "#49342d";


    // =====================================
    // LEGS
    // =====================================

    // Left leg

    pixel(
        10,
        34,
        5,
        8,
        pantsColour
    );


    // Right leg

    pixel(
        17,
        34,
        5,
        8,
        pantsColour
    );


    // =====================================
    // SHOES
    // =====================================

    pixel(
        8,
        41,
        8,
        4,
        outline
    );

    pixel(
        17,
        41,
        8,
        4,
        outline
    );


    pixel(
        10,
        40,
        6,
        3,
        shoeColour
    );

    pixel(
        18,
        40,
        6,
        3,
        shoeColour
    );


    // =====================================
    // BODY OUTLINE
    // =====================================

    pixel(
        7,
        19,
        18,
        17,
        outline
    );


    // =====================================
    // SHIRT
    // =====================================

    pixel(
        9,
        21,
        14,
        13,
        shirtColour
    );


    // =====================================
    // ARMS
    // =====================================

    pixel(
        4,
        22,
        5,
        12,
        outline
    );

    pixel(
        23,
        22,
        5,
        12,
        outline
    );


    pixel(
        6,
        24,
        3,
        8,
        skin
    );

    pixel(
        23,
        24,
        3,
        8,
        skin
    );


    // =====================================
    // HEAD OUTLINE
    // =====================================

    pixel(
        7,
        4,
        18,
        18,
        outline
    );


    // =====================================
    // FACE
    // =====================================

    pixel(
        9,
        6,
        14,
        14,
        skin
    );


    // =====================================
    // HAIR
    // =====================================

    pixel(
        7,
        3,
        18,
        6,
        outline
    );

    pixel(
        9,
        5,
        14,
        5,
        hairColour
    );


    // Hair sides

    pixel(
        7,
        7,
        4,
        6,
        hairColour
    );

    pixel(
        21,
        7,
        4,
        6,
        hairColour
    );


    // =====================================
    // EYES
    // =====================================

    pixel(
        11,
        12,
        2,
        3,
        "#292321"
    );

    pixel(
        19,
        12,
        2,
        3,
        "#292321"
    );


    // =====================================
    // MOUTH
    // =====================================

    pixel(
        14,
        17,
        4,
        2,
        "#9d4b4b"
    );


    // =====================================
    // ACCESSORIES
    // =====================================

    drawAccessory();

}


// =========================================
// ACCESSORIES
// =========================================

function drawAccessory() {

    // 0 = None
    // 1 = Cap
    // 2 = Chef Hat
    // 3 = Beanie
    // 4 = Glasses


    if (character.accessory === 1) {

        // Cap

        pixel(
            6,
            3,
            20,
            4,
            "#394d66"
        );

        pixel(
            20,
            6,
            9,
            3,
            "#293e50"
        );

    }


    if (character.accessory === 2) {

        // Chef hat

        pixel(
            9,
            1,
            14,
            4,
            "#ffffff"
        );

        pixel(
            7,
            4,
            18,
            4,
            "#ffffff"
        );

    }


    if (character.accessory === 3) {

        // Beanie

        pixel(
            7,
            2,
            18,
            7,
            "#d95757"
        );

        pixel(
            7,
            7,
            18,
            3,
            "#b84242"
        );

    }


    if (character.accessory === 4) {

        // Glasses

        const glasses =
            "#292321";


        // Left lens

        pixel(
            9,
            11,
            6,
            5,
            glasses
        );


        // Right lens

        pixel(
            17,
            11,
            6,
            5,
            glasses
        );


        // Lens interiors

        pixel(
            11,
            13,
            2,
            1,
            skinColour()
        );

        pixel(
            19,
            13,
            2,
            1,
            skinColour()
        );


        // Bridge

        pixel(
            15,
            13,
            2,
            2,
            glasses
        );

    }

}


// =========================================
// SKIN COLOUR
// =========================================

function skinColour() {

    return "#f3bd88";

}


// =========================================
// DRAW
// =========================================

drawCharacter();


// =========================================
// PLAYER POSITION
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
// WALKING
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
    // POSITION
    // =====================================

    player.style.left =
        Math.round(playerX) + "px";

    player.style.top =
        Math.round(playerY) + "px";


    // =====================================
    // WALK ANIMATION
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

            animateWalk();

        }


        player.classList.add(
            "walking"
        );

    }

    else {

        walking = false;

        stepTimer = 0;

        step = false;

        player.classList.remove(
            "walking"
        );

        drawCharacter();

    }

}


// =========================================
// WALK ANIMATION
// =========================================

function animateWalk() {

    drawCharacter();


    if (!walking) {
        return;
    }


    // Redraw tiny pixel legs
    // to create the walking frame

    if (step) {

        pixel(
            8,
            34,
            5,
            8,
            pantsColour
        );

        pixel(
            18,
            34,
            5,
            8,
            pantsColour
        );

    }

    else {

        pixel(
            10,
            34,
            5,
            8,
            pantsColour
        );

        pixel(
            17,
            34,
            5,
            8,
            pantsColour
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
