// needed for saving the json file
const fs = require("fs");
// needed to create a unique id for each ticket
const { v4: uuidv4 } = require("uuid");
// needed for making QR Codes from the json info
const QRCode = require("qrcode");

// Function that returns the current date in the format mm/dd/yyyy
function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  return today;
}

// create a function to save a json file for each ticket
function saveTicket(ticket) {
  let data = JSON.stringify(ticket);
  fs.writeFileSync(`json/${ticket.number}.json`, data);
}

// function to loop X times to create X tickets with associated json files
function createJsonTickets(
  NumberOfTickets,
  nameOfEvent,
  symbolOfEvent,
  descriptionOfEvent,
  creatorFees,
  urlOfEvent,
  locationOfEvent,
  DateOfEvent
) {
  for (let i = 0; i < NumberOfTickets; i++) {
    let counter = i;
    let ticket = {
      ticketId: uuidv4(),
      number: counter,
      name: nameOfEvent,
      symbol: symbolOfEvent,
      description: descriptionOfEvent,
      seller_fee_basis_points: creatorFees,
      external_url: urlOfEvent,
      date: DateOfEvent,
      location: locationOfEvent,
    };
    saveTicket(ticket);
  }
}

// function to save a QR Code
function saveQRCode(ticket) {
  let data = JSON.stringify(ticket);
  QRCode.toFile(`qr/${ticket.number}.png`, data, function (err) {
    if (err) return console.log("error occurred" + err);
    console.log("QR code saved to file");
  });
}


// function to create QR Codes from the json folder
function createQRCodes() {
  // read the contents of all files in data folder
  const files = fs.readdirSync("json");
  for (let i = 0; i < files.length; i++) {
    let rawdata = fs.readFileSync(`json/${files[i]}`);
    // nftMetadata or ticket
    let nftMetadata = JSON.parse(rawdata);
    // nftMetadata.number to string
    let stringdata = JSON.stringify(nftMetadata);
// create a QR code for each file
    QRCode.toFile(`qr/${nftMetadata.number}.png`, stringdata, function (err) {  if (err) return console.log("error occurred" + err);
      console.log(`QR code #${i} saved to file`);
    }
    );
  }
}


module.exports = {
  getDate: getDate,
  saveTicket: saveTicket,
  createJsonTickets: createJsonTickets,
  createQRCodes: createQRCodes,
};
