const canvas = document.getElementById('flyCanvas');
const ctx = canvas.getContext('2d');

const flyImage = new Image();
flyImage.src = 'fly.png';

const fly = {
    x: 50,
    y: 50,
    vx: 5,
    vy: 5,
    radius: 8,
};

function drawFly() {
    ctx.drawImage(flyImage, fly.x - fly.radius, fly.y - fly.radius, fly.radius * 3, fly.radius * 3);
}

function updateFlyPosition() {
    fly.x += fly.vx;
    fly.y += fly.vy;

    if (fly.x + fly.radius > canvas.width || fly.x - fly.radius < 0) {
        fly.vx = -fly.vx;
    }

    if (fly.y + fly.radius > canvas.height || fly.y - fly.radius < 0) {
        fly.vy = -fly.vy;
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    clearCanvas();
    drawFly();
    updateFlyPosition();

    requestAnimationFrame(draw);
}

flyImage.onload = draw;
