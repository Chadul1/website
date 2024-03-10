// finds the Buttons to apply using a data set. 
const buttons = document.querySelectorAll("[data-slider1-button]")

//adds a listen to the buttons.
buttons.forEach(button => {
    button.addEventListener("click", () => {
        //checks if the "next" button is clicked, if It is, it moves forward 1, if not, back 1.
        const offset = button.dataset.sliderButton === "next" ? 1 : -1
        const slides = button.closest("[data-slider]").querySelector('[data-slides]')
        //creates var by finding the current slide with the "Active" data attribute/
        const activeSlide = slides.querySelector("[data-active]")
        //Creates an array of the children in the slides const.
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        //If statements that ensure the slides loop when moving forward or backwards.
        if (newIndex < 0) newIndex = slides.children.length - 1 
        if (newIndex >= slides.children.length) newIndex = 0
        //Adds the "active" dataset to the current slide.
        slides.children[newIndex].dataset.active = true
        //and removes it on the previous slide.
        delete activeSlide.dataset.active
    })
});