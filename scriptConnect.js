document.addEventListener("DOMContentLoaded", function () {
    // Home button click event
    var homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function () {
        window.location.href = "home.html";
    });

    // Facebook button click event
    var facebookButton = document.getElementById("facebookButton");
    facebookButton.addEventListener("click", function () {
        window.open("https://www.facebook.com/lwlou?mibextid=ZbWKwL", "_blank");
    });

    // Instagram button click event
    var instagramButton = document.getElementById("instagramButton");
    instagramButton.addEventListener("click", function () {
        window.open("https://instagram.com/weilou86?igshid=OGQ5ZDc2ODk2ZA==", "_blank");
    });

    // TikTok button click event
    var tiktokButton = document.getElementById("tiktokButton");
    tiktokButton.addEventListener("click", function () {
        window.open("https://www.tiktok.com/", "_blank");
    });

    // LinkedIn button click event
    var linkedinButton = document.getElementById("linkedinButton");
    linkedinButton.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/weilou86?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
    });

    // Xiao Hong Shu button click event
    var xiaohongshuButton = document.getElementById("xiaohongshuButton");
    xiaohongshuButton.addEventListener("click", function () {
        window.open("https://www.xiaohongshu.com/", "_blank");
    });
});
