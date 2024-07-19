// Function to remove an element
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}


// Start the audio
window.addEventListener('DOMContentLoaded', (event) => {
    const audioElement = document.getElementById('background-music');
    const popup = document.getElementById('popup');
    const startButton = document.getElementById('start-button');

    // Show the popup
    popup.style.display = 'block';
  
    // When the button is clicked, hide the popup and start the animations
    startButton.addEventListener('click', () => {
        popup.style.display = 'none';

        // Show the images
        const penguin = document.querySelector('.penguin');
        const Teddy = document.querySelector('.Teddy');
        const dialog1 = document.querySelector('.dialogue-box-penguin');
        const dialog2 = document.querySelector('.dialogue-box-Teddy');
        Teddy.style.display = 'block';
        penguin.style.display = 'block';
        dialog1.style.display = 'block';
        dialog2.style.display = 'block';
    

        // Start the audio
        audioElement.volume = 1;
        audioElement.muted = false; // Unmute the audio before playing
        audioElement.loop = true;
        audioElement.play().catch((error) => {
        console.error("Playback failed because of", error);
    });
    


    // Select the initial dialogue boxes
    const dialogueBoxPenguin = document.querySelector('.dialogue-box-penguin');
    const dialogueBoxTeddy = document.querySelector('.dialogue-box-Teddy');

    // Remove the dialogue box after 5 seconds (5000 milliseconds)
    setTimeout(() => {
        dialogueBoxPenguin.remove();

    }, 7000);

    setTimeout(() => {
        removeElement(dialogueBoxTeddy);

    }, 8000);

    const dialogue1BoxPenguin = document.querySelector('.dialogue1-box-penguin');
    if (dialogue1BoxPenguin) {
        dialogue1BoxPenguin.style.display = 'block'; // Adjust display style as needed
    }
    const dialogue1BoxTeddy = document.querySelector('.dialogue1-box-Teddy');
    if (dialogue1BoxTeddy) {
        dialogue1BoxTeddy.style.display = 'block'; // Adjust display style as needed
    }

    const scene3Button = document.getElementById('open-gift');
    scene3Button.addEventListener('click', () => {
        window.location.href = 'scene3.html';
    })


})});