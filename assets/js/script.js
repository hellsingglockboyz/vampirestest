// Bloqueia o botão direito do mouse no vídeo e na logo
document.getElementById('background-video').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.querySelector('.logo').addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Desabilita a função de arrastar e soltar na logo
document.querySelector('.logo').draggable = false;

document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    
    // Mute the video
    video.muted = true;

    // Play the video and loop it
    video.play().then(function() {
        // Se o vídeo for reproduzido com sucesso, defina o loop para verdadeiro
        video.loop = true;
    }).catch(function(error) {
        // Log any errors to the console
        console.error('Video playback failed:', error);
    });

    // Disable video interaction
    video.addEventListener('click', function(e) {
        e.preventDefault();
    });

    video.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    video.addEventListener('touchstart', function(e) {
        e.preventDefault();
    });

    // Disable dragging
    video.draggable = false;
});
