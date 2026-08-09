/* =========================================
   MY LITTLE SHOP
   CHARACTER CREATOR
========================================= */


/* =========================================
   OPTIONS
========================================= */

const options = {

    hair: [
        "Brown",
        "Black",
        "Blonde",
        "Ginger",
        "Blue",
        "Pink"
    ],

    shirt: [
        "Blue",
        "Red",
        "Green",
        "Yellow",
        "Purple",
        "Orange"
    ],

    pants: [
        "Black",
        "Blue",
        "Brown",
        "Grey",
        "Green"
    ],

    shoes: [
        "Brown",
        "Black",
        "White",
        "Red"
    ],

    accessory: [
        "None",
        "Cap",
        "Chef Hat",
        "Beanie",
        "Glasses"
    ]

};


/* =========================================
   CURRENT CHARACTER
========================================= */

let character = {

    hair: 0,

    shirt: 0,

    pants: 0,

    shoes: 0,

    accessory: 0

};


/* =========================================
   ELEMENTS
========================================= */

const hair =
    document.querySelector(".hair");

const shirt =
    document.querySelector(".shirt");

const legs =
    document.querySelectorAll(".leg");

const shoes =
    document.querySelectorAll(".shoe");

const accessory =
    document.getElementById("accessory");


const selections = {

    hair:
        document.getElementById(
            "hairSelection"
        ),

    shirt:
        document.getElementById(
            "shirtSelection"
        ),

    pants:
        document.getElementById(
            "pantsSelection"
        ),

    shoes:
        document.getElementById(
            "shoesSelection"
        ),

    accessory:
        document.getElementById(
            "accessorySelection"
        )

};


/* =========================================
   COLOURS
========================================= */

const hairColours = {

    Brown: "#70452d",

    Black: "#292321",

    Blonde: "#e5bd55",

    Ginger: "#b85b31",

    Blue: "#4b82bd",

    Pink: "#d7659b"

};


const shirtColours = {

    Blue: "#4c8fd1",

    Red: "#d95757",

    Green: "#55a862",

    Yellow: "#e5bd4f",

    Purple: "#9464c0",

    Orange: "#df8247"

};


const pantsColours = {

    Black: "#292f4a",

    Blue: "#3e6096",

    Brown: "#765039",

    Grey: "#737a80",

    Green: "#46734f"

};


const shoeColours = {

    Brown: "#49362c",

    Black: "#292522",

    White: "#eeeeee",

    Red: "#b84242"

};


/* =========================================
   UPDATE CHARACTER
========================================= */

function updateCharacter() {


    const hairName =
        options.hair[
            character.hair
        ];


    const shirtName =
        options.shirt[
            character.shirt
        ];


    const pantsName =
        options.pants[
            character.pants
        ];


    const shoesName =
        options.shoes[
            character.shoes
        ];


    const accessoryName =
        options.accessory[
            character.accessory
        ];


    /* TEXT */

    selections.hair.textContent =
        hairName;

    selections.shirt.textContent =
        shirtName;

    selections.pants.textContent =
        pantsName;

    selections.shoes.textContent =
        shoesName;

    selections.accessory.textContent =
        accessoryName;


    /* COLOURS */

    hair.style.backgroundColor =
        hairColours[hairName];


    hair.querySelector(
        ".hair-top"
    ).style.backgroundColor =
        hairColours[hairName];


    hair.querySelector(
        ".hair-left"
    ).style.backgroundColor =
        hairColours[hairName];


    hair.querySelector(
        ".hair-right"
    ).style.backgroundColor =
        hairColours[hairName];


    shirt.style.backgroundColor =
        shirtColours[shirtName];


    legs.forEach(function (leg) {

        leg.style.backgroundColor =
            pantsColours[pantsName];

    });


    shoes.forEach(function (shoe) {

        shoe.style.backgroundColor =
            shoeColours[shoesName];

    });


    updateAccessory();

}


/* =========================================
   CHANGE OPTION
========================================= */

function changeOption(
    type,
    amount
) {

    character[type] += amount;


    if (
        character[type] <
        0
    ) {

        character[type] =
            options[type].length - 1;

    }


    if (
        character[type] >=
        options[type].length
    ) {

        character[type] = 0;

    }


    updateCharacter();

}


/* =========================================
   HAIR BUTTONS
========================================= */

document
    .getElementById(
        "hairPrevious"
    )
    .onclick = function () {

        changeOption(
            "hair",
            -1
        );

    };


document
    .getElementById(
        "hairNext"
    )
    .onclick = function () {

        changeOption(
            "hair",
            1
        );

    };


/* =========================================
   SHIRT BUTTONS
========================================= */

document
    .getElementById(
        "shirtPrevious"
    )
    .onclick = function () {

        changeOption(
            "shirt",
            -1
        );

    };


document
    .getElementById(
        "shirtNext"
    )
    .onclick = function () {

        changeOption(
            "shirt",
            1
        );

    };


/* =========================================
   PANTS BUTTONS
========================================= */

document
    .getElementById(
        "pantsPrevious"
    )
    .onclick = function () {

        changeOption(
            "pants",
            -1
        );

    };


document
    .getElementById(
        "pantsNext"
    )
    .onclick = function () {

        changeOption(
            "pants",
            1
        );

    };


/* =========================================
   SHOES BUTTONS
========================================= */

document
    .getElementById(
        "shoesPrevious"
    )
    .onclick = function () {

        changeOption(
            "shoes",
            -1
        );

    };


document
    .getElementById(
        "shoesNext"
    )
    .onclick = function () {

        changeOption(
            "shoes",
            1
        );

    };


/* =========================================
   ACCESSORY BUTTONS
========================================= */

document
    .getElementById(
        "accessoryPrevious"
    )
    .onclick = function () {

        changeOption(
            "accessory",
            -1
        );

    };


document
    .getElementById(
        "accessoryNext"
    )
    .onclick = function () {

        changeOption(
            "accessory",
            1
        );

    };


/* =========================================
   ACCESSORIES
========================================= */

function updateAccessory() {


    accessory.className =
        "accessory";


    const name =
        options.accessory[
            character.accessory
        ];


    if (name === "Cap") {

        accessory.classList.add(
            "pixel-cap"
        );

    }


    if (name === "Chef Hat") {

        accessory.classList.add(
            "pixel-chef-hat"
        );

    }


    if (name === "Beanie") {

        accessory.classList.add(
            "pixel-beanie"
        );

    }


    if (name === "Glasses") {

        accessory.classList.add(
            "pixel-glasses"
        );

    }

}


/* =========================================
   RANDOMIZE
========================================= */

document
    .getElementById(
        "randomizeButton"
    )
    .onclick = function () {


        character.hair =
            Math.floor(
                Math.random() *
                options.hair.length
            );


        character.shirt =
            Math.floor(
                Math.random() *
                options.shirt.length
            );


        character.pants =
            Math.floor(
                Math.random() *
                options.pants.length
            );


        character.shoes =
            Math.floor(
                Math.random() *
                options.shoes.length
            );


        character.accessory =
            Math.floor(
                Math.random() *
                options.accessory.length
            );


        updateCharacter();

    };


/* =========================================
   SAVE CHARACTER
========================================= */

function saveCharacter() {

    localStorage.setItem(

        "myLittleShopCharacter",

        JSON.stringify(character)

    );

}


/* =========================================
   CONTINUE
========================================= */

document
    .getElementById(
        "continueButton"
    )
    .onclick = function () {

        saveCharacter();

        window.location.href =
            "../index.html";

    };


/* =========================================
   BACK
========================================= */

document
    .getElementById(
        "backButton"
    )
    .onclick = function () {

        window.location.href =
            "../index.html";

    };


/* =========================================
   LOAD SAVED CHARACTER
========================================= */

function loadCharacter() {


    const saved =
        localStorage.getItem(
            "myLittleShopCharacter"
        );


    if (saved) {

        try {

            const loaded =
                JSON.parse(saved);


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

        catch {

            console.log(
                "Could not load character."
            );

        }

    }


    updateCharacter();

}


/* =========================================
   START
========================================= */

loadCharacter();
