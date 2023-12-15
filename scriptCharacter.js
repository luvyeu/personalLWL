document.addEventListener("DOMContentLoaded", function () {

    // Function to navigate back to discover-1.html
    function goBack() {
        window.location.href = "charm.html";
    }
    
    // Back button click event
    var backButton = document.querySelector("#backButton");
    if (backButton) { // Check if the back button exists
        backButton.addEventListener("click", goBack);
    }
    
});
