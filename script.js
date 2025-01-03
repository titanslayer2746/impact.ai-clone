const wrapper = document.querySelector('.partners-wrapper');
const list = document.querySelector('.partners-list');

// Clone the items for seamless scrolling
for(let i=0;i<4;i++){
    list.innerHTML += list.innerHTML;
}

// Set up the initial variables
let scrollAmount = 0;
const scrollSpeed = 0.20; // Adjust for smoothness

function animate() {
    scrollAmount -= scrollSpeed;

    // Reset position when the first set is completely off-screen
    if (Math.abs(scrollAmount) >= list.scrollWidth / 2) {
        scrollAmount = 0;
    }

    list.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animate); // Keep animating
}

// Start the animation
animate();
