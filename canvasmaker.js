// create a canvas instance
const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const { layers, width, height } = require("./input/config");

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");


const edition = 1;

const saveLayer = (_canvas) => {
  fs.writeFileSync(`data/newImage.png`, _canvas.toBuffer("image/png"));
  console.log("image created");
};

const drawLayer = async (_layer, _edition) => {
  // get a random element from the layer
  let element = _layer.elements[Math.floor(Math.random() * _layer.elements.length)];
  // let element = _layer.elements[0];
  console.log(element);
  console.log("mama");
  const image = await loadImage(`${_layer.location}${element.fileName}`);
  console.log("in here?");
  context.drawImage(image, _layer.position.x, _layer.position.y, _layer.size.width, _layer.size.height);
  console.log(`I created the ${_layer.name} and choose element ${element.name}`);
  saveLayer(canvas);
};

for (let i = 1; i <= edition; i++) {
  layers.forEach(layer => {
    drawLayer(layer, i);
  })
  console.log(`Creating edition ${i}`);

}

// // paint the canvas purple
// context.fillStyle = '#800080';
// context.fillRect(0, 0, width, height);

// const text = 'Hello, World!'

// context.textBaseline = 'top'
// context.fillStyle = '#3574d4'
// const textWidth = context.measureText(text).width
// context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
// context.fillStyle = '#fff'
// context.fillText(text, 600, 170)

// context.fillStyle = '#fff'
// context.font = 'bold 30pt Menlo'
// context.fillText('Made with ❤ at blocklive.io', 600, 530)

// // Write the image to file
// // const buffer = canvas.toBuffer("image/png");
// // fs.writeFileSync("data/image.png", buffer);

// // load the loco solana event image and composite it over the canvas
// const loco = fs.readFileSync('images/loco solana event.png');
// // const locoImage = new Image();
// // create a new canvas image
// const locoImage = new context.Image();
// locoImage.src = loco;
// context.drawImage(locoImage, 0, 0);

// // save it into the data folder with a name of newone.png
// const newone = canvas.toBuffer("image/png");
// fs.writeFileSync("data/newone.png", newone);
