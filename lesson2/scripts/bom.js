const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const feedback = document.querySelector("#feedback");

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        console.log("clicked");
        feedback.textContent = "";
    }

    else {
        input.focus();
        feedback.textContent = "Please write the favorite book and chapter";
    }
} );
