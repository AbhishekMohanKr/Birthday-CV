window.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById('popup');
    const startButton = document.getElementById('start-button');
    const scene2Button = document.getElementById('scene-2');
  
    // Show the popup
    popup.style.display = 'block';
  
    // When the button is clicked, hide the popup and start the animations
    startButton.addEventListener('click', () => {
        popup.style.display = 'none';
        // Show the images
        const cat1 = document.querySelector('.cat1');
        const cat2 = document.querySelector('.cat2');
        const dialog1 = document.querySelector('.dialogue-box-cat1');
        const dialog2 = document.querySelector('.dialogue-box-cat2');
        cat1.style.display = 'block';
        cat2.style.display = 'block';
        dialog1.style.display = 'block';
        dialog2.style.display = 'block';
        
    });
    // When the button is clicked, redirect to scene2.html
    scene2Button.addEventListener('click', () => {
        window.location.href = 'scene2.html';
    });

    
});