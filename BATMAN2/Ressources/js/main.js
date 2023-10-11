
function show_element(top, element, class_name) {
    if (top < windowHeight) {
        element.classList.add(class_name);
    } else {
        element.classList.remove(class_name);
    }
}


const classes = [
    'button-section',
    'ensemble_h1',
    'ensemble_tout',
    'img',
    'h1_text_h1',
    'h1_text_text',
    'picture1',
    'picture2',
    'presentation_title',
    'presentation_text',
    'introduction_title',
    'introduction_text',
    'h3',
    'form_h5',
    'form_submit'
];

const windowHeight = window.innerHeight;
const elements = {};
let rects = {};

classes.forEach(className => {
    elements[className] = document.querySelector(`.${className}`);
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

