// Add event listener for each video
document.querySelectorAll('#project-video-container').forEach(container => 
{ 
    const video = container.querySelector('#project-video')
    const fullScreenBtn = container.querySelector('#fullScreenBtn');
    fullScreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            // Enter fullscreen mode
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) { /* Safari */
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { /* IE11 */
                video.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen mode
            document.exitFullscreen();
        }
    });
})
