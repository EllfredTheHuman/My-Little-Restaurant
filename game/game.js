// =========================================
// MY LITTLE RESTAURANT
// GAME.JS
// =========================================


// =========================================
// ELEMENTS
// =========================================

const player =
    document.getElementById("player");

const canvas =
    document.getElementById("playerCanvas");

const ctx =
    canvas.getContext("2d");

const restaurant =
    document.getElementById("restaurant");

ctx.imageSmoothingEnabled = false;


// =========================================
// CHARACTER
// =========================================

let character = {

    hair: 0,
    shirt: 0,
    pants: 0,
    shoes: 0,
    accessory: 0

};


// =========================================
// LOAD CHARACTER
// =========================================

const savedCharacter =
    localStorage.getItem(
        "myLittleShopCharacter"
    );


if (savedCharacter) {

    try {

        const loaded =
            JSON.parse(savedCharacter);


        if (
            typeof loaded.hair ===
            "number"
        ) {

            character.hair =
                loaded.hair;

        }


        if (
            typeof loaded.shirt ===
            "number"
        ) {

            character.shirt =
                loaded.shirt;

        }


        if (
            typeof loaded.pants ===
            "number"
        ) {

            character.pants =
                loaded.pants;

        }


        if (
            typeof loaded.shoes ===
            "number"
        ) {

            character.shoes =
                loaded.shoes;

        }


        if (
            typeof loaded.accessory ===
            "number"
        ) {

            character.accessory =
                loaded.accessory;

        }

    }

    catch (error) {

        console.log(
            "Character save could not be loaded."
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


const skinColour =
    "#f3bd88";

const outlineColour =
    "#49342d";


// =========================================
// PLAYER POSITION
// =========================================

let playerX = 430;

let playerY = 470;


// =========================================
// PLAYER SIZE
// =========================================

const playerWidth = 34;

const playerHeight = 48;


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
// PIXEL DRAWING
// =========================================

function pixel(
    x,
    y,
    width,
    height,
    colour
) {

    ctx.fillStyle =
        colour;

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
    frame = 0
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

    if (frame === 0) {

        // LEFT LEG

        pixel(
            9,
            33,
            7,
            10,
            outlineColour
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // RIGHT LEG

        pixel(
            17,
            33,
            7,
            10,
            outlineColour
        );

        pixel(
            19,
            34,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // LEFT SHOE

        pixel(
            7,
            41,
            9,
            5,
            outlineColour
        );

        pixel(
            9,
            40,
            6,
            3,
            shoeColours[
                character.shoes
            ]
        );


        // RIGHT SHOE

        pixel(
            17,
            41,
            9,
            5,
            outlineColour
        );

        pixel(
            19,
            40,
            6,
            3,
            shoeColours[
                character.shoes
            ]
        );

    }


    // =====================================
    // LEFT LEG RAISED
    // =====================================

    if (frame === 1) {

        pixel(
            9,
            31,
            7,
            10,
            outlineColour
        );

        pixel(
            11,
            32,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // RIGHT LEG DOWN

        pixel(
            17,
            33,
            7,
            10,
            outlineColour
        );

        pixel(
            19,
            34,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // LEFT SHOE

        pixel(
            7,
            39,
            9,
            5,
            outlineColour
        );

        pixel(
            9,
            38,
            6,
            3,
            shoeColours[
                character.shoes
            ]
        );


        // RIGHT SHOE

        pixel(
            17,
            41,
            9,
            5,
            outlineColour
        );

        pixel(
            19,
            40,
            6,
            3,
            shoeColours[
                character.shoes
            ]
        );

    }


    // =====================================
    // RIGHT LEG RAISED
    // =====================================

    if (frame === 2) {

        // LEFT LEG DOWN

        pixel(
            9,
            33,
            7,
            10,
            outlineColour
        );

        pixel(
            11,
            34,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // RIGHT LEG UP

        pixel(
            17,
            31,
            7,
            10,
            outlineColour
        );

        pixel(
            19,
            32,
            3,
            8,
            pantsColours[
                character.pants
            ]
        );


        // LEFT SHOE

        pixel(
            7,
            41,
            9,
            5,
            outlineColour
        );

        pixel(
            9,
            40,
            6,
            3,
            shoeColours[
                character.shoes
            ]
        );


        // RIGHT SHOE

        pixel(
            17,
            39,
            9,
            5,
            outlineColour
        );

        pixel(
            19,
            38,
            6,
            3,
            shoeColours[
                character.shoes
            ]
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
        outlineColour
    );


    pixel(
        9,
        20,
        14,
        14,
        shirtColours[
            character.shirt
        ]
    );


    // =====================================
    // LEFT ARM
    // =====================================

    pixel(
        3,
        22,
        6,
        13,
        outlineColour
    );


    pixel(
        6,
        24,
        3,
        9,
        skinColour
    );


    // =====================================
    // RIGHT ARM
    // =====================================

    pixel(
        23,
        22,
        6,
        13,
        outlineColour
    );


    pixel(
        23,
        24,
        3,
        9,
        skinColour
    );


    // =====================================
    // HEAD
    // =====================================

    pixel(
        7,
        3,
        18,
        18,
        outlineColour
    );


    pixel(
        9,
        5,
        14,
        14,
        skinColour
    );


    // =====================================
    // HAIR
    // =====================================

    pixel(
        7,
        2,
        18,
        7,
        outlineColour
    );


    pixel(
        9,
        4,
        14,
        5,
        hairColours[
            character.hair
        ]
    );


    pixel(
        7,
        7,
        4,
        6,
        hairColours[
            character.hair
        ]
    );


    pixel(
        21,
        7,
        4,
        6,
        hairColours[
            character.hair
        ]
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

    if (
        character.accessory === 1
    ) {

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

    if (
        character.accessory === 2
    ) {

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

    if (
        character.accessory === 3
    ) {

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

    if (
        character.accessory === 4
    ) {

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
            skinColour
        );


        pixel(
            19,
            12,
            2,
            2,
            skinColour
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
// PLAYER COLLISION BOX
// =========================================

function getPlayerRect(
    x,
    y
) {

    return {

        left:
            x + 12,

        right:
            x + 22,

        top:
            y + 28,

        bottom:
            y + 47

    };

}


// =========================================
// COLLISION
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
// GET ELEMENT RECTANGLE
// =========================================

function getElementRect(
    element
) {

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
// SOLID OBJECTS
// =========================================

function getSolidObjects() {

    const objects = [];


    // =====================================
    // TAN WALL
    // =====================================

    objects.push({

        left: 0,

        right:
            restaurant.clientWidth,

        top: 0,

        bottom:
            restaurant.clientHeight *
            0.42

    });


    // =====================================
    // TABLETOP
    // =====================================

    const table =
        document.querySelector(
            ".table-top"
        );


    if (table) {

        const rect =
            getElementRect(table);


        objects.push({

            left:
                rect.left,

            right:
                rect.right,

            top:
                rect.top,

            bottom:
                rect.bottom

        });

    }


    // =====================================
    // TABLE LEG
    // =====================================

    const tableLeg =
        document.querySelector(
            ".table-leg"
        );


    if (tableLeg) {

        const rect =
            getElementRect(
                tableLeg
            );


        objects.push({

            left:
                rect.left,

            right:
                rect.right,

            top:
                rect.top,

            bottom:
                rect.bottom

        });

    }


    // =====================================
    // CHAIRS
    // =====================================

    const chairs =
        document.querySelectorAll(
            ".chair"
        );


    chairs.forEach(
        function(chair) {

            const rect =
                getElementRect(
                    chair
                );


            objects.push({

                left:
                    rect.left,

                right:
                    rect.right,

                top:
                    rect.top,

                bottom:
                    rect.bottom

            });

        }
    );


    // =====================================
    // DOORS
    // =====================================

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


    if (kitchenDoor) {

        objects.push(
            getElementRect(
                kitchenDoor
            )
        );

    }


    if (officeDoor) {

        objects.push(
            getElementRect(
                officeDoor
            )
        );

    }


    if (frontDoor) {

        objects.push(
            getElementRect(
                frontDoor
            )
        );

    }


    return objects;

}


// =========================================
// CAN MOVE
// =========================================

function canMoveTo(
    newX,
    newY
) {

    const playerRect =
        getPlayerRect(
            newX,
            newY
        );


    // =====================================
    // OUTER BOUNDARIES
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
        restaurant.clientHeight - 5
    ) {

        return false;

    }


    // =====================================
    // SOLID OBJECTS
    // =====================================

    const objects =
        getSolidObjects();


    for (
        let i = 0;
        i < objects.length;
        i++
    ) {

        if (
            rectanglesOverlap(
                playerRect,
                objects[i]
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
// MOVE PLAYER
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
    // DIAGONAL MOVEMENT
    // =====================================

    if (
        moveX !== 0 &&
        moveY !== 0
    ) {

        moveX *= 0.707;

        moveY *= 0.707;

    }


    // =====================================
    // HORIZONTAL
    // =====================================

    const newX =
        playerX + moveX;


    if (
        canMoveTo(
            newX,
            playerY
        )
    ) {

        playerX =
            newX;

    }


    // =====================================
    // VERTICAL
    // =====================================

    const newY =
        playerY + moveY;


    if (
        canMoveTo(
            playerX,
            newY
        )
    ) {

        playerY =
            newY;

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
    // WALKING
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
        legFrame
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
// START GAME
// =========================================

drawCharacter(0);

player.style.left =
    playerX + "px";

player.style.top =
    playerY + "px";

gameLoop();
