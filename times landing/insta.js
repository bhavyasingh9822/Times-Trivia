// You can add JavaScript code here if you need to interact with the buttons or the image
// For example, you could use this file to handle button clicks or any other dynamic behaviors. 

// Example: Add a click event listener to the Recipe button
const recipeButton = document.querySelector('.button-group .button:first-child');
recipeButton.addEventListener('click', () => {
    // Add your code here to handle the Recipe button click
    console.log("Recipe button clicked");
});

// Example: Add a click event listener to the Upload button
const uploadButton = document.querySelector('.button-group .button:last-child');
uploadButton.addEventListener('click', () => {
    // Add your code here to handle the Upload button click
    console.log("Upload button clicked");
});