
document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const imagePaths = ['b1.png', 'b2.png', 'b3.png', 'b4.png', 'b5.png', 'b6.png', 'b7.png', 'b8.png', 'b9.png', 'b10.png','b11.png', 'b12.png', 'b13.png', 'b14.png', 'b15.png', 'b16.png', 'b17.png', 'b18.png', 'b19.png'];
    const imageContainer = document.querySelector('.image-container');

    function rotateImages() {
        document.getElementById('image1').src = 'images/' + imagePaths[(currentImageIndex + imagePaths.length - 1) % imagePaths.length];
        document.getElementById('image2').src = 'images/' + imagePaths[currentImageIndex];
        document.getElementById('image3').src = 'images/' + imagePaths[(currentImageIndex + 1) % imagePaths.length];
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        updateImages();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex + imagePaths.length - 1) % imagePaths.length;
        updateImages();
    }

    function updateImages() {
        document.getElementById('image1').src = 'images/' + imagePaths[(currentImageIndex + imagePaths.length - 1) % imagePaths.length];
        document.getElementById('image2').src = 'images/' + imagePaths[currentImageIndex];
        document.getElementById('image3').src = 'images/' + imagePaths[(currentImageIndex + 1) % imagePaths.length];
    }

    // Set up manual click event listeners
    document.getElementById('prevBtn').addEventListener('click', prevImage);
    document.getElementById('nextBtn').addEventListener('click', nextImage);

    // Set up automatic rotation

    setInterval(rotateImages, 3000);
});


