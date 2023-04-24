const canvas = document.querySelector("#canvas");
//code here

const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", function (event) {
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, 30, 0, 2 * Math.PI);
  context.stroke();
});
