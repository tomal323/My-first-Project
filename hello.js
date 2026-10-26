console.log("Hello,This Is Sabbir") // Finds the form using its ID and saves it in a variable.
        const form = document.getElementById("nameForm");

        // Finds the name input box and saves it in a variable.
        const nameInput = document.getElementById("name");

        // Finds the empty paragraph where the greeting will appear.
        const greeting = document.getElementById("greeting");

        // Runs this function whenever the visitor submits the form.
        form.addEventListener("submit", function(event) {

            // Stops the browser from reloading the page after submission.
            event.preventDefault();

            // Reads the name entered by the visitor and removes extra spaces.
            const name = nameInput.value.trim();

            // Checks that the visitor entered a name.
            if (name === "") {

                // Shows a message if the name box is empty.
                greeting.textContent = "Please enter your name.";

            } else {

                // Displays a greeting using the visitor's name.
                greeting.textContent = "Hello, " + name + "!";
            }
        });