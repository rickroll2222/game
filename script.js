document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    let playerLeft = 0;
    let playerBottom = 0;

    function jump() {
        if (playerBottom < 200) { // Adjust jump height as needed
            playerBottom += 50; // Adjust jump speed as needed
            player.style.bottom = playerBottom + 'px';
        } else {
            clearInterval(jumpInterval);
            fall();
        }
    }

    function fall() {
        let fallInterval = setInterval(() => {
            if (playerBottom > 0) {
                playerBottom -= 5; // Adjust fall speed as needed
                player.style.bottom = playerBottom + 'px';
            } else {
                clearInterval(fallInterval);
            }
        }, 20); // Adjust fall interval as needed
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === ' ') { // Spacebar can also trigger jump
            jump();
        }
    });

});
