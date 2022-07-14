// -- Wizard Steps script
// Selectors
window.onload = function() {
    //dom not only ready, but everything is loaded
    var prevBtn = document.querySelector("#prev-step");
    var nextBtn = document.querySelector("#next-step");
    var stepItems = document.querySelectorAll('.progressbar-list-item');
    var wizardStepWrapperItems = document.querySelectorAll('.wizard-step-wrapper');

    // Variables
    var counter = 1;
    var activeStepNumber = 1;
    var minStep = 1;
    var maxStep = 4;

    nextBtn.addEventListener("click", (e) => {
        // Scroll to top after/if redirecting
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });

        if (counter >= maxStep) { return; }

        if (counter > 0 && counter <= maxStep) {
            counter++;

            stepItems.forEach( ( item ) => {
                if ( parseInt(item.dataset.step) == counter) {
                    item.classList.add("active");
                    activeStepNumber = item.dataset.step;
                }
            });

            wizardStepWrapperItems.forEach( ( item ) => {
                item.classList.add("d-none");

                if ( parseInt( activeStepNumber ) == item.dataset.wizardWrapperStep) {
                    item.classList.remove("d-none");
                }
            });
        }
    });

    prevBtn.addEventListener("click", () => {
        // Scroll to top after/if redirecting
        window.scrollTo({
            top: 100,
            behavior: 'smooth'
        });

        if (counter <= minStep) { return; }

        if (counter >= minStep) {
            stepItems.forEach( ( item ) => {
                if ( parseInt( item.dataset.step ) == counter) {
                    item.classList.remove('active');
                    activeStepNumber = item.dataset.step;
                }
            });

            wizardStepWrapperItems.forEach( ( item ) => {
                item.classList.add("d-none");

                if ( parseInt( activeStepNumber - 1 ) == item.dataset.wizardWrapperStep) {
                    item.classList.remove("d-none");
                }
            });
        }

        counter--;
    });
};
