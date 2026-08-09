/* =========================================
   CHARACTER CREATOR
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


let character = {

    hair: 0,
    shirt: 0,
    pants: 0,
    shoes: 0,
    accessory: 0

};


const characterElement =
    document.getElementById("character");


const selections = {

    hair:
        document.getElementById("hairSelection"),

    shirt:
        document.getElementById("shirtSelection"),

    pants:
        document.getElementById("pantsSelection"),

    shoes:
        document.getElementById("shoesSelection"),

    accessory:
        document.getElementById("accessorySelection")

};


/* =========================================
   UPDATE
========================================= */

function updateCharacter() {

    selections.hair.textContent =
        options.hair[character.hair];

    selections.shirt.textContent =
        options.shirt[character.shirt];

    selections.pants.textContent =
        options.pants[character.pants];

    selections.shoes.textContent =
        options.shoes[character.shoes];

    selections.accessory.textContent =
        options.accessory[character.accessory];


    updateAppearance();

}


/* =========================================
   CHANGE OPTIONS
========================================= */

function changeOption(type, amount) {

    character[type] += amount;


    if (character[type] < 0) {

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
   BUTTONS
========================================= */

document
    .getElementById("hairPrevious")
    .onclick = () => {

        changeOption("hair", -1);

    };


document
    .getElementById("hairNext")
    .onclick = () => {

        changeOption("hair", 1);

    };


document
    .getElementById("shirtPrevious")
    .onclick = () => {

        changeOption("shirt", -1);

    };


document
    .getElementById("shirtNext")
    .onclick = () => {

        changeOption("shirt", 1);

    };


document
    .getElementById("pantsPrevious")
    .onclick = () => {

        changeOption("pants", -1);

    };


document
    .getElementById("pantsNext")
    .onclick = () => {

        changeOption("pants", 1);

    };


document
    .getElementById("shoesPrevious")
    .onclick = () => {

        changeOption("shoes", -1);

    };


document
    .getElementById("shoesNext")
    .onclick = () => {

        changeOption("shoes", 1);

    };


document
    .getElementById("accessoryPrevious")
    .onclick = () => {

        changeOption("accessory", -1);

    };


document
    .getElementById("accessoryNext")
    .onclick = () => {

        changeOption("accessory", 1);

    };


/* =========================================
   RANDOMIZE
========================================= */

document
    .getElementById("randomizeButton")
    .onclick = () => {

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
   APPEARANCE
========================================= */

function updateAppearance() {

    const hair =
        document.querySelector(
            ".character-hair"
        );

    const shirt =
        document.querySelector(
            ".character-shirt"
        );

    const legs =
        document.querySelectorAll(
            ".character-leg"
        );

    const shoes =
        document.querySelectorAll(
            ".character-shoe"
        );


    const hairColours = {

        Brown: "#70452d",
        Black: "#252323",
        Blonde: "#e7bd55",
        Ginger: "#b85c32",
        Blue: "#4d83c4",
        Pink: "#d86a9b"

    };


    const shirtColours = {

        Blue: "#4c8fd1",
        Red: "#d95757",
        Green: "#55aa62",
        Yellow: "#e6bd4f",
        Purple: "#9666c2",
        Orange: "#df8247"

    };


    const pantsColours = {

        Black: "#292f4a",
        Blue: "#3d5f9b",
        Brown: "#765039",
        Grey: "#727b82",
        Green: "#46734f"

    };


    const shoeColours = {

        Brown: "#49362c",
        Black: "#292522",
        White: "#eeeeee",
        Red: "#b84242"

    };


    hair.style.backgroundColor =
        hairColours[
            options.hair[character.hair]
        ];


    shirt.style.backgroundColor =
        shirtColours[
            options.shirt[character.shirt]
        ];


    legs.forEach(leg => {

        leg.style.backgroundColor =
            pantsColours[
                options.pants[character.pants]
            ];

    });


    shoes.forEach(shoe => {

        shoe.style.backgroundColor =
            shoeColours[
                options.shoes[character.shoes]
            ];

    });


    updateAccessory();

}


/* =========================================
   ACCESSORIES
========================================= */

function updateAccessory() {

    const old =
        document.querySelector(
            ".character-accessory"
        );


    if (old) {
        old.remove();
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

        element.classList.add(
            "pixel-cap"
        );

    }


    if (accessory === "Chef Hat") {

        element.classList.add(
            "pixel-chef-hat"
        );

    }


    if (accessory === "Beanie") {

        element.classList.add(
            "pixel-beanie"
        );

    }


    if (accessory === "Glasses") {

        element.classList.add(
            "pixel-glasses"
        );

    }


    characterElement.appendChild(
        element
    );

}


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
    .getElementById("continueButton")
    .onclick = () => {

        saveCharacter();

        window.location.href =
            "../index.html";

    };


/* =========================================
   BACK
========================================= */

document
    .getElementById("backButton")
    .onclick = () => {

        window.location.href =
            "../index.html";

    };


/* =========================================
   LOAD
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

        } catch {

            console.log(
                "Could not load character."
            );

        }

    }


    updateCharacter();

}


loadCharacter();
