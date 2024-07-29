// Maximum number of attempts
const maxAttempts = 20;
let attempts = 0;

function tryToRemoveChildren() {
    const parentElement = document.querySelector('body > div:nth-child(3) > .css-1h1938b');

    if (parentElement) {
        // Step 2: Remove all children
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
        clearInterval(intervalId); // Stop the interval once the element is found
    } else {
        attempts++;
        if (attempts < maxAttempts) {
            console.log(`[Injected Script] Attempt ${attempts}; parent not found...`);
        } else {
            console.log("[Injected Script] maximum attempts reached.");
        }
    }
}

const intervalId = setInterval(tryToRemoveChildren, 500);

