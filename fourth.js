const fs = require('fs');
const QRCode = require('qrcode');

//Get Data from Json
let rawdata = fs.readFileSync('data/0.json');
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
  QRCode.toFile(`output/${nftMetadata.edition}.png`, stringdata,function (err) {
    if (err) return console.log("error occurred")
    console.log("QR code saved to file")
  })
})


// ****
// var opts = {
//   errorCorrectionLevel: 'H',
//   type: 'image/jpeg',
//   quality: 0.3,
//   margin: 1,
//   color: {
//     dark:"#010599FF",
//     light:"#FFBF60FF"
//   }
// }

// QRCode.toDataURL('text', opts, function (err, url) {
//   if (err) throw err

//   var img = document.getElementById('image')
//   img.src = url
// })