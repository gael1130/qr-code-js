const QRCode = require('qrcode');

// Create the data
let data = {
  name:"Employee Name",
  age:27,
  department:"Police",
  id:"aisuoiqu3234738jdhf100223"
}

// Converting into String data
let stringdata = JSON.stringify(data)

// Print the QR code to terminal
QRCode.toString(stringdata,{type:'terminal'}, function (err, url) {
  if(err) return console.log("error occurred")
  // Printing the generated code
  console.log(url)
  console.log("\n")
  console.log("pute")
  // save the generated code to a file  in the current directory

  QRCode.toFile('./qrcode.png', stringdata, function (err) {
    if (err) return console.log("error occurred")
    console.log("QR code saved to file")
  })
})

// Get the base64 url
// QRCode.toDataURL(stringdata, function (err, url) {
//   if(err) return console.log("error occurred")
//   // Printing the code
//   console.log(url)
// })

// // QR Code Saved in the current directory as qrcode.png
// QRCode.toFile(stringdata, 'data/qrcode.png', function (err) {
//   if(err) return console.log("error occurred")
//   // Printing the code
//   console.log("QR code generated")
// } )


