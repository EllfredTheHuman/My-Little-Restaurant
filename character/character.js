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
   GET ELEMENTS
========================================= */

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


const characterElement =
    document.getElementById("character");


/* =========================================
   UPDATE TEXT
========================================= */

function updateSelections() {

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


    updateCharacterAppearance();
}


/* =========================================
   CYCLE OPTION
========================================= */

function changeOption(type, direction) {

    character[type] += direction;


    if (character[type] < 0) {

        character[type] =
            options[type].length - 1;
    }


    if (character[type] >= options[type].length) {

        character[type] = 0;
    }


    updateSelections();
}


/* =========================================
   HAIR BUTTONS
========================================= */

document
    .getElementById("hairPrevious")
    .addEventListener("click", function () {

        changeOption("hair", -1);

    });


document
    .getElementById("hairNext")
    .addEventListener("click", function () {

        changeOption("hair", 1);

    });


/* =========================================
   SHIRT BUTTONS
========================================= */

document
    .getElementById("shirtPrevious")
    .addEventListener("click", function () {

        changeOption("shirt", -1);

    });


document
    .getElementById("shirtNext")
    .addEventListener("click", function () {

        changeOption("shirt", 1);

    });


/* =========================================
   PANTS BUTTONS
========================================= */

document
    .getElementById("pantsPrevious")
    .addEventListener("click", function () {

        changeOption("pants", -1);

    });


document
    .getElementById("pantsNext")
    .addEventListener("click", function () {

        changeOption("pants", 1);

    });


/* =========================================
   SHOES BUTTONS
========================================= */

document
    .getElementById("shoesPrevious")
    .addEventListener("click", function () {

        changeOption("shoes", -1);

    });


document
    .getElementById("shoesNext")
    .addEventListener("click", function () {

        changeOption("shoes", 1);

    });


/* =========================================
   ACCESSORY BUTTONS
========================================= */

document
    .getElementById("accessoryPrevious")
    .addEventListener("click", function () {

        changeOption("accessory", -1);

    });


document
    .getElementById("accessoryNext")
    .addEventListener("click", function () {

        changeOption("accessory", 1);

    });


/* =========================================
   RANDOMIZE
========================================= */

document
    .getElementById("randomizeButton")
    .addEventListener("click", function () {

        character.hair =
            Math.floor(Math.random() * options.hair.length);

        character.shirt =
            Math.floor(Math.random() * options.shirt.length);

        character.pants =
            Math.floor(Math.random() * options.pants.length);

        character.shoes =
            Math.floor(Math.random() * options.shoes.length);

        character.accessory =
            Math.floor(Math.random() * options.accessory.length);


        updateSelections();

    });


/* =========================================
   CHARACTER APPEARANCE
========================================= */

function updateCharacterAppearance() {

    const hair =
        options.hair[character.hair];

    const shirt =
        options.shirt[character.shirt];

    const pants =
        options.pants[character.pants];

    const shoes =
        options.shoes[character.shoes];

    const accessory =
        options.accessory[character.accessory];


    /* Hair */

    characterElement.dataset.hair =
        hair.toLowerCase();


    /* Shirt */

    characterElement.dataset.shirt =
        shirt.toLowerCase();


    /* Pants */

    characterElement.dataset.pants =
        pants.toLowerCase();


    /* Shoes */

    characterElement.dataset.shoes =
        shoes.toLowerCase();


    /* Accessory */

    characterElement.dataset.accessory =
        accessory.toLowerCase();


    updateColours();
}


/* =========================================
   COLOUR SYSTEM
========================================= */

function updateColours() {

    const hair =
        document.querySelector(".character-hair");

    const shirt =
        document.querySelector(".character-shirt");

    const legs =
        document.querySelectorAll(".character-leg");

    const shoes =
        document.querySelectorAll(".character-shoe");


    /* -------------------------
       HAIR
    ------------------------- */

    const hairColours = {

        brown: "#6b452c",

        black: "#292522",

        blonde: "#e7bd55",

        ginger: "#b85c32",

        blue: "#4d83c4",

        pink: "#d86a9b"

    };


    hair.style.backgroundColor =
        hairColours[
            options.hair[character.hair].toLowerCase()
        ];


    /* -------------------------
       SHIRT
    ------------------------- */

    const shirtColours = {

        blue: "#4c8fd1",

        red: "#d95757",

        green: "#55aa62",

        yellow: "#e6bd4f",

        purple: "#9666c2",

        orange: "#df8247"

    };


    shirt.style.backgroundColor =
        shirtColours[
            options.shirt[character.shirt].toLowerCase()
        ];


    /* -------------------------
       PANTS
    ------------------------- */

    const pantsColours = {

        black: "#292f4a",

        blue: "#3d5f9b",

        brown: "#765039",

        grey: "#727b82",

        green: "#46734f"

    };


    const pantsColour =
        pantsColours[
            options.pants[character.pants].toLowerCase()
        ];


    legs.forEach(function (leg) {

        leg.style.backgroundColor =
            pantsColour;

    });


    /* -------------------------
       SHOES
    ------------------------- */

    const shoeColours = {

        brown: "#49362c",

        black: "#292522",

        white: "#eeeeee",

        red: "#b84242"

    };


    const shoeColour =
        shoeColours[
            options.shoes[character.shoes].toLowerCase()
        ];


    shoes.forEach(function (shoe) {

        shoe.style.backgroundColor =
            shoeColour;

    });


    updateAccessory();

}


/* =========================================
   ACCESSORIES
========================================= */

function updateAccessory() {

    let oldAccessory =
        document.querySelector(".character-accessory");


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


    element.classList.add(
        "character-accessory"
    );


    if (accessory === "Cap") {

        element.textContent = "🧢";

    }


    if (accessory === "Chef Hat") {

        element.textContent = "👨‍🍳";

    }


    if (accessory === "Beanie") {

        element.textContent = "🧶";

    }


    if (accessory === "Glasses") {

        element.textContent = "🤓";

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
    .addEventListener("click", function () {

        saveCharacter();

        alert(
            "Character saved! The restaurant is coming next!"
        );

    });


/* =========================================
   BACK BUTTON
========================================= */

document
    .getElementById("backButton")
    .addEventListener("click", function () {

        window.location.href = "../index.html";

    });


/* =========================================
   LOAD SAVED CHARACTER
========================================= */

function loadCharacter() {

    const saved =
        localStorage.getItem(
            "myLittleShopCharacter"
        );


    if (!saved) {

        updateSelections();

        return;

    }


    try {

        const parsed =
            JSON.parse(saved);


        character = parsed;


    } catch (error) {

        console.log(
            "Could not load character."
        );

    }


    updateSelections();

}


/* =========================================
   START
========================================= */

loadCharacter();
