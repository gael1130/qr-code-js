const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");


const width = 1024;
const height = 1024;

const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");



// drawImage(image, dx, dy, dWidth, dHeight), dwidth and dheight are hardcoded but need to change
// turn that into a function
function drawImageWithQr(backgroundImage, QrImage, resultImage) {
  loadImage(backgroundImage).then((image) => {
    // draw on that image
    context.drawImage(image, 0, 0, width, height);
    loadImage(QrImage).then((image) => {

      context.drawImage(image, 621, 621, 388, 388);
      const buffer = canvas.toBuffer("image/png");
      fs.writeFileSync(resultImage, buffer);
    });

  });
}


drawImageWithQr("input/background/0.png", "input/background/1.png", "test.png");

// read the contents of all files in output folder
const qrCodes = fs.readdirSync("output");
console.log(qrCodes.length);
for (let i = 0; i < qrCodes.length; i++) {
  drawImageWithQr(`input/background/${i}.png`, `output/${i}.png`, `final/${i}.png`);
  console.log(`${i} done`);
  console.log(`input/background/${i}.png`);

}

// loadImage("input/background/loco solana event.png").then((image) => {
//   // draw on that image
//   context.drawImage(image, 0, 0, width, height);
//   loadImage("input/qr/3.png").then((image) => {

//     context.drawImage(image, 621, 621, 388, 388);
//     const buffer = canvas.toBuffer("image/png");
//     fs.writeFileSync("coco.png", buffer);
//   });
// });

// iterate over the output files with a for loop
// for (let i = 0; i < number; i++) {

// }