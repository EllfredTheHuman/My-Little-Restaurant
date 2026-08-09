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
        "Blue",
        "Black",
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
   CHARACTER DATA
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

const hairBack =
    document.querySelector(".hair-back");

const hairFront =
    document.querySelector(".hair-front");

const body =
    document.querySelector(".body");

const legs =
    document.querySelectorAll(".leg");

const shoes =
    document.querySelectorAll(".shoe");

const accessory =
    document.getElementById("accessory");


const names = {

    hair:
        document.getElementById("hairName"),

    shirt:
        document.getElementById("shirtName"),

    pants:
        document.getElementById("pantsName"),

    shoes:
        document.getElementById("shoesName"),

    accessory:
        document.getElementById("accessoryName")

};


/* =========================================
   COLOURS
========================================= */

const hairColours = {

    Brown: "#70462e",

    Black: "#292321",

    Blonde: "#e6bd55",

    Ginger: "#b85b31",

    Blue: "#4c82bd",

    Pink: "#d7659b"

};


const shirtColours = {

    Blue: "#4d91d1",

    Red: "#d95757",

    Green: "#55a862",

    Yellow: "#e5bd4f",

    Purple: "#9464c0",

    Orange: "#df8247"

};


const pantsColours = {

    Blue: "#3d5d91",

    Black: "#292f4a",

    Brown: "#765039",

    Grey: "#737a80",

    Green: "#46734f"

};


const shoeColours = {

    Brown: "#50382c",

    Black: "#292522",

    White: "#eeeeee",

    Red: "#b84242"

};


/* =========================================
   UPDATE CHARACTER
========================================= */

function updateCharacter() {

    const hairName =
        options.hair[character.hair];

    const shirtName =
        options.shirt[character.shirt];

    const pantsName =
        options.pants[character.pants];

    const shoesName =
        options.shoes[character.shoes];

    const accessoryName =
        options.accessory[
            character.accessory
        ];


    /* TEXT */

    names.hair.textContent =
        hairName;

    names.shirt.textContent =
        shirtName;

    names.pants.textContent =
        pantsName;

    names.shoes.textContent =
        shoesName;

    names.accessory.textContent =
        accessoryName;


    /* HAIR */

    hairBack.style.backgroundColor =
        hairColours[hairName];

    hairFront.style.backgroundColor =
        hairColours[hairName];


    /* SHIRT */

    body.style.backgroundColor =
        shirtColours[shirtName];


    /* PANTS */

    legs.forEach(
        function (leg) {

            leg.style.backgroundColor =
                pantsColours[pantsName];

        }
    );


    /* SHOES */

    shoes.forEach(
        function (shoe) {

            shoe.style.backgroundColor =
                shoeColours[shoesName];

        }
    );


    /* ACCESSORY */

    updateAccessory();

}


/* =========================================
   ACCESSORIES
========================================= */

function updateAccessory() {

    accessory.className = "";

    const name =
        options.accessory[
            character.accessory
        ];


    if (name === "Cap") {

        accessory.classList.add("cap");

    }


    if (name === "Chef Hat") {

        accessory.classList.add("chef-hat");

    }


    if (name === "Beanie") {

        accessory.classList.add("beanie");

    }


    if (name === "Glasses") {

        accessory.classList.add("glasses");

    }

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
        character[type] < 0
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
   BUTTON HELPER
========================================= */

function setupButtons(type) {

    document
        .getElementById(
            type + "Previous"
        )
        .addEventListener(
            "click",
            function () {

                changeOption(
                    type,
                    -1
                );

            }
        );


    document
        .getElementById(
            type + "Next"
        )
        .addEventListener(
            "click",
            function () {

                changeOption(
                    type,
                    1
                );

            }
        );

}


/* =========================================
   SETUP
========================================= */

setupButtons("hair");

setupButtons("shirt");

setupButtons("pants");

setupButtons("shoes");

setupButtons("accessory");


/* =========================================
   RANDOMIZE
========================================= */

document
    .getElementById(
        "randomizeButton"
    )
    .addEventListener(
        "click",
        function () {

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

        }
    );


/* =========================================
   SAVE
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
    .addEventListener(
        "click",
        function () {

            saveCharacter();

            window.location.href =
                "../index.html";

        }
    );


/* =========================================
   BACK
========================================= */

document
    .getElementById(
        "backButton"
    )
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "../index.html";

        }
    );


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

        } catch (error) {

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
