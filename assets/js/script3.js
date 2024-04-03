document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
  
    // Mute o vídeo
    video.muted = false;
  
    // Desabilita o loop do vídeo
    video.loop = true;
  
    // Define o vídeo como comp3.mp4
    video.src = 'media/comp3.mp4';
  

  });
  
