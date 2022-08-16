const fs = require("fs");
const{ v4: uuidv4 } = require("uuid");



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
  fs.writeFileSync(`data/${ticket.number}.json`, data);
}

let DateOfEvent = getDate();

// Event Location
let location = "Tenerife";
// number of tickets
let number = 10;
// name of the event
let event = "Loco Solana";

// loop X times to create X tickets with associated json files
for (let i = 0; i < number; i++) {
  let counter = i;
  let ticket = {
    date: DateOfEvent,
    location: location,
    number: counter,
    ticketId: uuidv4(),
    event: event,
  };
  saveTicket(ticket);
}
