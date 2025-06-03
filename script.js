const keys = document.querySelectorAll('.key');

    function playSound(key){
    const audio = document.querySelector(`audio[data-key="${key.toUpperCase()}"]`);
    const keyElement = document.querySelector(`.key[data-key="${key.toUpperCase()}"]`);
    if(keyElement){
        animateKey(keyElement); // Animate the key when pressed
    }
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

keys.forEach(key => {
    key.addEventListener('click', function(){
        const keyAttribute = this.getAttribute('data-key');
        playSound(keyAttribute);
    });
});

// Adding touch support for mobile devices
keys.forEach(key => {
    key.addEventListener('touchstart', function(e){
        e.preventDefault(); // Prevent default touch behavior
        const keyAttribute = this.getAttribute('data-key');
        playSound(keyAttribute);
    });
});

function animateKey(key){
    key.animate([
        // Keyframes for the animation
        { transform: 'scale(1)', backgroundColor: '#333'},
        { transform: 'scale(1.1)', backgroundColor: '#ffc600' },
        { transform: 'scale(1)', backgroundColor: '#333' }
    ], {
        // Timing options
        duration: 100,
        iterations: 1,
    });
}