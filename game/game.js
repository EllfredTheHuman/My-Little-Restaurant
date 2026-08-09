// =========================================
// MY LITTLE RESTAURANT
// GAME.JS
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


        if (typeof loaded.hair === "number")
            character.hair = loaded.hair;

        if (typeof loaded.shirt === "number")
            character.shirt = loaded.shirt;

        if (typeof loaded.pants === "number")
            character.pants = loaded.pants;

        if (typeof loaded.shoes === "number")
            character.shoes = loaded.shoes;

        if (typeof loaded.accessory === "number")
            character.accessory = loaded.accessory;

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
    legFrame = 0
) {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // =====================================
    // LEGS
    // =====================================

    if (legFrame === 0) {

        // LEFT LEG

        pixel(
            9,
            33,
            7,
            10,
            outline
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColour
        );


        // RIGHT LEG

        pixel(
            17,
            33,
            7,
            10,
            outline
        );

        pixel(
            19,
            34,
            3,
            8,
            pantsColour
        );


        // LEFT SHOE

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


        // RIGHT SHOE

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


    // =====================================
    // LEG FRAME 1
    // =====================================

    if (legFrame === 1) {

        // LEFT RAISED

        pixel(
            9,
            31,
            7,
            10,
            outline
        );

        pixel(
            11,
            32,
            3,
            8,
            pantsColour
        );


        // RIGHT DOWN

        pixel(
            17,
            33,
            7,
            10,
            outline
        );

        pixel(
            19,
            34,
            3,
            8,
            pantsColour
        );


        // LEFT SHOE

        pixel(
            7,
            39,
            9,
            5,
            outline
        );

        pixel(
            9,
            38,
            6,
            3,
            shoeColour
        );


        // RIGHT SHOE

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


    // =====================================
    // LEG FRAME 2
    // =====================================

    if (legFrame === 2) {

        // LEFT DOWN

        pixel(
            9,
            33,
            7,
            10,
            outline
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColour
        );


        // RIGHT RAISED

        pixel(
            17,
            31,
            7,
            10,
            outline
        );

        pixel(
            19,
            32,
            3,
            8,
            pantsColour
        );


        // LEFT SHOE

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


        // RIGHT SHOE

        pixel(
            17,
            39,
            9,
            5,
            outline
        );

        pixel(
            19,
            38,
            6,
            3,
            shoeColour
        );

    }


    // =====================================
    // BODY
    // =====================================

    pixel(
        7,
        18,
        18,
        18,
        outline
    );

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


    // =====================================
    // HEAD
    // =====================================

    pixel(
        7,
        3,
        18,
        18,
        outline
    );

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
    // ACCESSORY
    // =====================================

    drawAccessory();

}


// =========================================
// ACCESSORY
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


        pixel(
            9,
            10,
            6,
            5,
            glasses
        );

        pixel(
            17,
            10,
            6,
            5,
            glasses
        );


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
// PLAYER SIZE
// =========================================

const playerWidth = 34;

const playerHeight = 48;


// =========================================
// PLAYER POSITION
// =========================================

let playerX = 430;

let playerY = 470;


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

let legFrame = 0;

let walkTimer = 0;


// =========================================
// COLLISION RECTANGLE
// =========================================

function getPlayerRect(
    x,
    y
) {

    return {

        left: x + 12,

        right: x + playerWidth - 8,

        top: y + 20,

        bottom: y + playerHeight

    };

}


// =========================================
// RECTANGLE COLLISION
// =========================================

function rectanglesOverlap(
    a,
    b
) {

    return (

        a.left < b.right &&

        a.right > b.left &&

        a.top < b.bottom &&

        a.bottom > b.top

    );

}


// =========================================
// GET SOLID OBJECTS
// =========================================

function getSolidObjects() {

    const objects = [];


    const table =
        document.querySelector(".table");


    const chairs =
        document.querySelectorAll(
            ".chair"
        );


    const kitchenDoor =
        document.getElementById(
            "kitchenDoor"
        );


    const officeDoor =
        document.getElementById(
            "officeDoor"
        );


    const frontDoor =
        document.getElementById(
            "frontDoor"
        );


    if (table) {

        objects.push(
            table
        );

    }


    chairs.forEach(
        function(chair) {

            objects.push(
                chair
            );

        }
    );


    if (kitchenDoor) {

        objects.push(
            kitchenDoor
        );

    }


    if (officeDoor) {

        objects.push(
            officeDoor
        );

    }


    if (frontDoor) {

        objects.push(
            frontDoor
        );

    }


    return objects;

}


// =========================================
// GET RECTANGLE RELATIVE TO RESTAURANT
// =========================================

function getElementRect(
    element
) {

    const restaurant =
        document.getElementById(
            "restaurant"
        );


    const elementRect =
        element.getBoundingClientRect();


    const restaurantRect =
        restaurant.getBoundingClientRect();


    return {

        left:
            elementRect.left -
            restaurantRect.left,

        right:
            elementRect.right -
            restaurantRect.left,

        top:
            elementRect.top -
            restaurantRect.top,

        bottom:
            elementRect.bottom -
            restaurantRect.top

    };

}


// =========================================
// COLLISION CHECK
// =========================================

function canMoveTo(
    newX,
    newY
) {

    const restaurant =
        document.getElementById(
            "restaurant"
        );


    const playerRect =
        getPlayerRect(
            newX,
            newY
        );


    // =====================================
    // RESTAURANT BOUNDARIES
    // =====================================

    if (
        playerRect.left < 8
    ) {

        return false;

    }


    if (
        playerRect.right >
        restaurant.clientWidth - 8
    ) {

        return false;

    }


    if (
        playerRect.top < 5
    ) {

        return false;

    }


    if (
        playerRect.bottom >
        restaurant.clientHeight
    ) {

        return false;

    }


    // =====================================
    // OBJECT COLLISION
    // =====================================

    const objects =
        getSolidObjects();


    for (
        let i = 0;
        i < objects.length;
        i++
    ) {

        const objectRect =
            getElementRect(
                objects[i]
            );


        // Add a little padding
        // so collision feels natural.

        const paddedRect = {

            left:
                objectRect.left - 4,

            right:
                objectRect.right + 4,

            top:
                objectRect.top - 4,

            bottom:
                objectRect.bottom + 4

        };


        if (
            rectanglesOverlap(
                playerRect,
                paddedRect
            )
        ) {

            return false;

        }

    }


    return true;

}


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


    // =====================================
    // DIAGONAL SPEED
    // =====================================

    if (
        moveX !== 0 &&
        moveY !== 0
    ) {

        moveX *= 0.707;

        moveY *= 0.707;

    }


    // =====================================
    // HORIZONTAL COLLISION
    // =====================================

    const nextX =
        playerX + moveX;


    if (
        canMoveTo(
            nextX,
            playerY
        )
    ) {

        playerX =
            nextX;

    }


    // =====================================
    // VERTICAL COLLISION
    // =====================================

    const nextY =
        playerY + moveY;


    if (
        canMoveTo(
            playerX,
            nextY
        )
    ) {

        playerY =
            nextY;

    }


    // =====================================
    // POSITION
    // =====================================

    player.style.left =
        Math.round(
            playerX
        ) + "px";


    player.style.top =
        Math.round(
            playerY
        ) + "px";


    // =====================================
    // ANIMATION
    // =====================================

    const moving =
        moveX !== 0 ||
        moveY !== 0;


    if (moving) {

        walkTimer++;


        if (
            walkTimer >= 10
        ) {

            walkTimer = 0;

            legFrame++;


            if (
                legFrame > 2
            ) {

                legFrame = 0;

            }

        }

    }

    else {

        walkTimer = 0;

        legFrame = 0;

    }


    drawCharacter(
        moving
            ? legFrame
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


// =========================================
// START
// =========================================

drawCharacter(0);

gameLoop();
