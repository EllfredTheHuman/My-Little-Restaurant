/* =========================================
   MY LITTLE SHOP
   CHARACTER CREATOR
========================================= */


/* =========================================
   CHARACTER OPTIONS
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

const characterElement =
    document.getElementById("character");

const hairSelection =
    document.getElementById("hairSelection");

const shirtSelection =
    document.getElementById("shirtSelection");

const pantsSelection =
    document.getElementById("pantsSelection");

const shoesSelection =
    document.getElementById("shoesSelection");

const accessorySelection =
    document.getElementById("accessorySelection");


/* =========================================
   UPDATE EVERYTHING
========================================= */

function updateCharacter() {

    hairSelection.textContent =
        options.hair[character.hair];

    shirtSelection.textContent =
        options.shirt[character.shirt];

    pantsSelection.textContent =
        options.pants[character.pants];

    shoesSelection.textContent =
        options.shoes[character.shoes];

    accessorySelection.textContent =
        options.accessory[character.accessory];


    updateAppearance();

}


/* =========================================
   CHANGE OPTION
========================================= */

function changeOption(type, amount) {

    character[type] += amount;


    if (character[type] < 0) {

        character[type] =
            options[type].length - 1;

    }


    if (character[type] >= options[type].length) {

        character[type] = 0;

    }


    updateCharacter();

}


/* =========================================
   HAIR
========================================= */

document
    .getElementById("hairPrevious")
    .addEventListener("click", () => {

        changeOption("hair", -1);

    });


document
    .getElementById("hairNext")
    .addEventListener("click", () => {

        changeOption("hair", 1);

    });


/* =========================================
   SHIRT
========================================= */

document
    .getElementById("shirtPrevious")
    .addEventListener("click", () => {

        changeOption("shirt", -1);

    });


document
    .getElementById("shirtNext")
    .addEventListener("click", () => {

        changeOption("shirt", 1);

    });


/* =========================================
   PANTS
========================================= */

document
    .getElementById("pantsPrevious")
    .addEventListener("click", () => {

        changeOption("pants", -1);

    });


document
    .getElementById("pantsNext")
    .addEventListener("click", () => {

        changeOption("pants", 1);

    });


/* =========================================
   SHOES
========================================= */

document
    .getElementById("shoesPrevious")
    .addEventListener("click", () => {

        changeOption("shoes", -1);

    });


document
    .getElementById("shoesNext")
    .addEventListener("click", () => {

        changeOption("shoes", 1);

    });


/* =========================================
   ACCESSORIES
========================================= */

document
    .getElementById("accessoryPrevious")
    .addEventListener("click", () => {

        changeOption("accessory", -1);

    });


document
    .getElementById("accessoryNext")
    .addEventListener("click", () => {

        changeOption("accessory", 1);

    });


/* =========================================
   RANDOMIZE
========================================= */

document
    .getElementById("randomizeButton")
    .addEventListener("click", () => {

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

    });


/* =========================================
   UPDATE CHARACTER APPEARANCE
========================================= */

function updateAppearance() {

    const hair =
        document.querySelector(".character-hair");

    const shirt =
        document.querySelector(".character-shirt");

    const legs =
        document.querySelectorAll(".character-leg");

    const shoes =
        document.querySelectorAll(".character-shoe");


    /* =====================================
       HAIR COLOURS
    ====================================== */

    const hairColours = {

        Brown: "#6b452c",

        Black: "#292522",

        Blonde: "#e7bd55",

        Ginger: "#b85c32",

        Blue: "#4d83c4",

        Pink: "#d86a9b"

    };


    hair.style.backgroundColor =
        hairColours[
            options.hair[character.hair]
        ];


    /* =====================================
       SHIRT COLOURS
    ====================================== */

    const shirtColours = {

        Blue: "#4c8fd1",

        Red: "#d95757",

        Green: "#55aa62",

        Yellow: "#e6bd4f",

        Purple: "#9666c2",

        Orange: "#df8247"

    };


    shirt.style.backgroundColor =
        shirtColours[
            options.shirt[character.shirt]
        ];


    /* =====================================
       PANTS COLOURS
    ====================================== */

    const pantsColours = {

        Black: "#292f4a",

        Blue: "#3d5f9b",

        Brown: "#765039",

        Grey: "#727b82",

        Green: "#46734f"

    };


    const pantsColour =
        pantsColours[
            options.pants[character.pants]
        ];


    legs.forEach((leg) => {

        leg.style.backgroundColor =
            pantsColour;

    });


    /* =====================================
       SHOE COLOURS
    ====================================== */

    const shoeColours = {

        Brown: "#49362c",

        Black: "#292522",

        White: "#eeeeee",

        Red: "#b84242"

    };


    const shoeColour =
        shoeColours[
            options.shoes[character.shoes]
        ];


    shoes.forEach((shoe) => {

        shoe.style.backgroundColor =
            shoeColour;

    });


    updateAccessory();

}


/* =========================================
   PIXEL ACCESSORIES
========================================= */

function updateAccessory() {

    const oldAccessory =
        document.querySelector(
            ".character-accessory"
        );


    if (oldAccessory) {

        oldAccessory.remove();

    }


    const accessory =
        options.accessory[
            character.accessory
        ];


    if (accessory === "None") {

        return;

    }


    const element =
        document.createElement("div");


    element.className =
        "character-accessory";


    /* =====================================
       CAP
    ====================================== */

    if (accessory === "Cap") {

        element.classList.add(
            "pixel-cap"
        );

    }


    /* =====================================
       CHEF HAT
    ====================================== */

    if (accessory === "Chef Hat") {

        element.classList.add(
            "pixel-chef-hat"
        );

    }


    /* =====================================
       BEANIE
    ====================================== */

    if (accessory === "Beanie") {

        element.classList.add(
            "pixel-beanie"
        );

    }


    /* =====================================
       GLASSES
    ====================================== */

    if (accessory === "Glasses") {

        element.classList.add(
            "pixel-glasses"
        );

    }


    characterElement.appendChild(element);

}


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
    .getElementById("continueButton")
    .addEventListener("click", () => {

        saveCharacter();

        alert(
            "Character saved!"
        );

    });


/* =========================================
   BACK TO TITLE
========================================= */

document
    .getElementById("backButton")
    .addEventListener("click", () => {

        window.location.href =
            "../index.html";

    });


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
                typeof loaded.hair === "number" &&
                typeof loaded.shirt === "number" &&
                typeof loaded.pants === "number" &&
                typeof loaded.shoes === "number" &&
                typeof loaded.accessory === "number"
            ) {

                character = loaded;

            }

        }

        catch (error) {

            console.log(
                "No valid character save found."
            );

        }

    }


    updateCharacter();

}


/* =========================================
   START CHARACTER EDITOR
========================================= */

loadCharacter();
