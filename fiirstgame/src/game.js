const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 400;

// Draw a simple player
ctx.fillStyle = "blue";
ctx.fillRect(50, 150, 50, 50);
