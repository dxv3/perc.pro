document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById("overlay");
    var enterButton = document.getElementById("enterButton");
    var backgroundMusic = document.getElementById("backgroundMusic");

    enterButton.addEventListener("click", function() {
        fadeOut(overlay, 500); // Adjust the duration as needed
        backgroundMusic.volume = 0.25;
        backgroundMusic.play();

        // Wait for the fade-out effect to complete before removing the overlay
        setTimeout(function() {
            overlay.style.display = "none";
        }, 1000); // Adjust the timeout duration to match the fade-out duration
    });

    function fadeOut(element, duration) {
        var opacity = 1;
        var startTime = performance.now();

        function update() {
            var elapsed = performance.now() - startTime;
            var progress = elapsed / duration;

            opacity = 1 - progress;
            element.style.opacity = opacity;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        update();
    }
});