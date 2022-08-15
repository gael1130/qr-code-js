// 'use strict';

const fs = require('fs');
const QRCode = require('qrcode');

//Get Data from Json
let rawdata = fs.readFileSync('34.json');
let nftMetadata = JSON.parse(rawdata);
console.log(nftMetadata);

//Converting into String data
let stringdata = JSON.stringify(nftMetadata);


// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'}, function (err, url) {
  if(err) return console.log("error occurred")
  // Printing the generated code
  console.log(url)
  // save the generated code to a file  in the current directory

  QRCode.toFile(`${nftMetadata.edition}.png`, stringdata,function (err) {
    if (err) return console.log("error occurred")
    console.log("QR code saved to file")
  })

  //QR Code to file saved as svg
  QRCode.toFile(`${nftMetadata.edition}.svg`, stringdata,function (err) {
    if (err) return console.log("error occurred")
    console.log("QR code saved to file")
  })
})


