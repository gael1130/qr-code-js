// 'use strict';

const fs = require('fs');
const QRCode = require('qrcode');


// read the contents of all files in data folder
const files = fs.readdirSync('./data');

// loop through each file in the data folder
for (let i = 0; i < files.length; i++) {
  let rawdata= fs.readFileSync(`./data/${files[i]}`);
  let nftMetadata = JSON.parse(rawdata);
  console.log(files[i]);
  // Read the edition number from the metadata
  console.log(nftMetadata.edition);
  console.log("===============================");

}
