function show_element(top, element, class_name) {
    if (top < windowHeight) {
        element.classList.add(class_name);
    } else {
        element.classList.remove(class_name);
    }
}

const classes = [
    'intro_text',
    'p'
];

const windowHeight = window.innerHeight;
const elements = {};
let rects = {};

classes.forEach(className => {
    elements[className] = document.querySelector(`.${className}`);
    if (elements[className]) {
        rects[className] = elements[className].getBoundingClientRect();
        show_element(rects[className].top, elements[className], `show_element_normally`);
    }
});

window.addEventListener('scroll', () => {
    rects = {};
    
    for (const className in elements) {
        if (elements.hasOwnProperty(className)) {
            if (elements[className]) {
                rects[className] = elements[className].getBoundingClientRect();
                show_element(rects[className].top, elements[className], `show_element_normally`);
            }
        }
    }
});


// Obtenir des références aux éléments HTML
const finishGameBtn = document.getElementById("finish_game");
const modal = document.getElementById("myModal");
const closeModalBtn = document.getElementById("closeModal");

// Fonction pour ouvrir la fenêtre modale
function openModal() {
    modal.style.display = "block";
    console.log("open modal");
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
    modal.style.display = "none";
    console.log("close modal");
}

// Écouteurs d'événements pour les boutons
finishGameBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

// Écouteur d'événement pour fermer la fenêtre modale en cliquant en dehors de la modal
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Écouteur d'événement pour fermer la fenêtre modale en appuyant sur la touche "Escape"
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
