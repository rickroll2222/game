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
        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
            jump();
        }
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
            moveLeft();
        }
        if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
            moveRight();
        }
    });

    function moveLeft() {
        if (playerLeft > 0) {
            playerLeft -= 5; // Adjust movement speed as needed
            player.style.left = playerLeft + 'px';
        }
    }

    function moveRight() {
        if (playerLeft < 750) { // Adjust based on game width and player width
            playerLeft += 5; // Adjust movement speed as needed
            player.style.left = playerLeft + 'px';
        }
    }

});
