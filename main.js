const { getDate, saveTicket, createJsonTickets, fs, createQRCodes } = require("./functions");

// Parameters of the ticket
let DateOfEvent = getDate();

// Event Location
const location = "Tenerife";
// number of tickets
const ticketsNumber = 500;
// name of the event
const name = "Loco Solana";
const symbol = "LS";
const description = "The first event organized by Blocklive on Solana";
// 1000 = 10%
const fees = 1000;
const url = "https://www.blocklive.io";

createJsonTickets(ticketsNumber, name, symbol, description, fees, url, location, DateOfEvent);

createQRCodes();