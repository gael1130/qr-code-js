const fs = require("fs");
const QRCode = require("qrcode");

// read the contents of all files in data folder
const files = fs.readdirSync("newData");
console.log(files);

for (let i = 0; i < files.length; i++) {
  let rawdata = fs.readFileSync(`newData/${files[i]}`);
  // nftMetadata or ticket
  let nftMetadata = JSON.parse(rawdata);
  console.log(files[i]);
  console.log(nftMetadata);
  // nftMetadata.number to string
  let stringdata = JSON.stringify(nftMetadata);
  console.log("===============================");
  // create a QR code for each file
  QRCode.toFile(`output/${nftMetadata.number}.png`, stringdata, function (err) {
    if (err) return console.log("error occurred");
    console.log("QR code saved to file");
  });
}
