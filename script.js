const key = document.querySelectorAll('.key');

    function playSound(key){
    const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`);
    const keyElement = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
    if (!audio) return; // Stop the function if no audio is found

    keyElement.classList.add('active');
    audio.currentTime = 0; // Rewind to the start
    audio.play();

    setTimeout(() => {
        keyElement.classList.remove('active');
    }, 100);
}

window.addEventListener('keydown', function(event){
    playSound(event.key);
});