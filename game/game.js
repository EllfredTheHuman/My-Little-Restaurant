// =========================================
// MY LITTLE RESTAURANT
// GAME JAVASCRIPT
// =========================================


// =========================================
// PLAYER
// =========================================

const player =
    document.getElementById("player");

const canvas =
    document.getElementById("playerCanvas");

const ctx =
    canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;


// =========================================
// CHARACTER SAVE
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

        character.hair =
            typeof loaded.hair === "number"
                ? loaded.hair
                : 0;

        character.shirt =
            typeof loaded.shirt === "number"
                ? loaded.shirt
                : 0;

        character.pants =
            typeof loaded.pants === "number"
                ? loaded.pants
                : 0;

        character.shoes =
            typeof loaded.shoes === "number"
                ? loaded.shoes
                : 0;

        character.accessory =
            typeof loaded.accessory === "number"
                ? loaded.accessory
                : 0;

    }

    catch (error) {

        console.log(
            "Could not load character."
        );

    }

}


// =========================================
// COLOURS
// =========================================

const hairColours = [

    "#70462e",
    "#292321",
    "#e6bd55",
    "#b85b31",
    "#4c82bd",
    "#d7659b"

];


const shirtColours = [

    "#4d91d1",
    "#d95757",
    "#55a862",
    "#e5bd4f",
    "#9464c0",
    "#df8247"

];


const pantsColours = [

    "#3d5d91",
    "#292f4a",
    "#765039",
    "#737a80",
    "#46734f"

];


const shoeColours = [

    "#50382c",
    "#292522",
    "#eeeeee",
    "#b84242"

];


const hairColour =
    hairColours[character.hair];

const shirtColour =
    shirtColours[character.shirt];

const pantsColour =
    pantsColours[character.pants];

const shoeColour =
    shoeColours[character.shoes];

const skin =
    "#f3bd88";

const outline =
    "#49342d";


// =========================================
// PIXEL
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

function drawCharacter(
    walkFrame = 0
) {

    // Clear EVERYTHING first.
    // This prevents old animation
    // frames from remaining behind.

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // =====================================
    // LEGS
    // =====================================

    if (walkFrame === 0) {

        // Standing / idle

        // Left leg

        pixel(
            9,
            33,
            7,
            9,
            outline
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColour
        );


        // Right leg

        pixel(
            17,
            33,
            7,
            9,
            outline
        );

        pixel(
            19,
            34,
            3,
            8,
            pantsColour
        );

    }


    if (walkFrame === 1) {

        // Left leg forward

        pixel(
            7,
            33,
            8,
            9,
            outline
        );

        pixel(
            9,
            34,
            4,
            8,
            pantsColour
        );


        // Right leg backward

        pixel(
            18,
            33,
            7,
            9,
            outline
        );

        pixel(
            20,
            34,
            3,
            8,
            pantsColour
        );

    }


    if (walkFrame === 2) {

        // Left leg backward

        pixel(
            9,
            33,
            7,
            9,
            outline
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColour
        );


        // Right leg forward

        pixel(
            17,
            33,
            8,
            9,
            outline
        );

        pixel(
            19,
            34,
            4,
            8,
            pantsColour
        );

    }


    // =====================================
    // SHOES
    // =====================================

    if (walkFrame === 0) {

        pixel(
            7,
            41,
            9,
            5,
            outline
        );

        pixel(
            9,
            40,
            6,
            3,
            shoeColour
        );


        pixel(
            17,
            41,
            9,
            5,
            outline
        );

        pixel(
            19,
            40,
            6,
            3,
            shoeColour
        );

    }


    if (walkFrame === 1) {

        pixel(
            5,
            41,
            10,
            5,
            outline
        );

        pixel(
            7,
            40,
            7,
            3,
            shoeColour
        );


        pixel(
            19,
            41,
            9,
            5,
            outline
        );

        pixel(
            21,
            40,
            6,
            3,
            shoeColour
        );

    }


    if (walkFrame === 2) {

        pixel(
            7,
            41,
            9,
            5,
            outline
        );

        pixel(
            9,
            40,
            6,
            3,
            shoeColour
        );


        pixel(
            19,
            41,
            10,
            5,
            outline
        );

        pixel(
            21,
            40,
            7,
            3,
            shoeColour
        );

    }


    // =====================================
    // BODY OUTLINE
    // =====================================

    pixel(
        7,
        18,
        18,
        18,
        outline
    );


    // =====================================
    // SHIRT
    // =====================================

    pixel(
        9,
        20,
        14,
        14,
        shirtColour
    );


    // =====================================
    // ARMS
    // =====================================

    if (walkFrame === 1) {

        // Left arm forward

        pixel(
            3,
            21,
            6,
            14,
            outline
        );

        pixel(
            5,
            24,
            3,
            9,
            skin
        );


        // Right arm backward

        pixel(
            23,
            22,
            6,
            13,
            outline
        );

        pixel(
            23,
            25,
            3,
            8,
            skin
        );

    }

    else if (walkFrame === 2) {

        // Left arm backward

        pixel(
            3,
            22,
            6,
            13,
            outline
        );

        pixel(
            6,
            25,
            3,
            8,
            skin
        );


        // Right arm forward

        pixel(
            23,
            21,
            6,
            14,
            outline
        );

        pixel(
            23,
            24,
            3,
            9,
            skin
        );

    }

    else {

        // Idle arms

        pixel(
            3,
            22,
            6,
            13,
            outline
        );

        pixel(
            6,
            24,
            3,
            9,
            skin
        );


        pixel(
            23,
            22,
            6,
            13,
            outline
        );

        pixel(
            23,
            24,
            3,
            9,
            skin
        );

    }


    // =====================================
    // HEAD OUTLINE
    // =====================================

    pixel(
        7,
        3,
        18,
        18,
        outline
    );


    // =====================================
    // FACE
    // =====================================

    pixel(
        9,
        5,
        14,
        14,
        skin
    );


    // =====================================
    // HAIR
    // =====================================

    pixel(
        7,
        2,
        18,
        7,
        outline
    );

    pixel(
        9,
        4,
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
        11,
        2,
        3,
        "#292321"
    );

    pixel(
        19,
        11,
        2,
        3,
        "#292321"
    );


    // =====================================
    // MOUTH
    // =====================================

    pixel(
        14,
        16,
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

    // CAP

    if (character.accessory === 1) {

        pixel(
            6,
            2,
            20,
            5,
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


    // CHEF HAT

    if (character.accessory === 2) {

        pixel(
            10,
            0,
            12,
            3,
            "#ffffff"
        );

        pixel(
            8,
            2,
            16,
            6,
            "#ffffff"
        );

    }


    // BEANIE

    if (character.accessory === 3) {

        pixel(
            7,
            1,
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


    // GLASSES

    if (character.accessory === 4) {

        const glasses =
            "#292321";


        // LEFT LENS

        pixel(
            9,
            10,
            6,
            5,
            glasses
        );


        // RIGHT LENS

        pixel(
            17,
            10,
            6,
            5,
            glasses
        );


        // Lens openings

        pixel(
            11,
            12,
            2,
            2,
            skin
        );

        pixel(
            19,
            12,
            2,
            2,
            skin
        );


        // Bridge

        pixel(
            15,
            12,
            2,
            2,
            glasses
        );

    }

}


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
// WALK ANIMATION
// =========================================

let walkFrame = 0;

let walkTimer = 0;


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
    // ANIMATION
    // =====================================

    const moving =
        moveX !== 0 ||
        moveY !== 0;


    if (moving) {

        walkTimer++;


        if (walkTimer >= 8) {

            walkTimer = 0;

            walkFrame++;


            if (walkFrame > 2) {

                walkFrame = 0;

            }

        }

    }

    else {

        walkTimer = 0;

        walkFrame = 0;

    }


    // Draw ONE complete frame

    drawCharacter(
        moving
            ? walkFrame
            : 0
    );

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


drawCharacter(0);

gameLoop();
