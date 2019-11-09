const inputStr =
    "It's the time you spent on your rose that makes your rose so important.";
const gcpApiUrl = `${document.location.origin}/gcp-lang?text=${inputStr}`;
let resultValue = "Loading...";

function preload() {}

function setup() {
    createCanvas(1024, 768);

    fetch(gcpApiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            resultValue = JSON.stringify(myJson, null, 4);
        });
}

function draw() {
    background(255);
    fill(0);
    text("This is p5.js page.", 50, 50);

    textSize(20);
    textStyle(BOLD);
    text(inputStr, 50, 150);

    textStyle(NORMAL);
    text(resultValue, 50, 200);

    translate(800, 150);
    fill(204, 101, 192, 127);
    noStroke();
    for (let i = 0; i < 10; i++) {
        ellipse(0, 30, 20, 80);
        rotate(PI / 5);
    }
}
