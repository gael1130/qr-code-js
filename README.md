# qr-code-js

qr code maker in js for the solana hackaton summer 2022

1. Fill in the data in main.js: date of event, location, number of tickets, name of the event, symbol for the event (initials of the name), description of the event, fees for secondary sales, url of the event.

2. Run main.js (node main.js) => it will create the tickets info (json format) in the json folder & the qr codes associated in the qr folder.

3. clone hashlips art engine: https://github.com/HashLips/hashlips_art_engine

4. Replace the main.js file of the hashlips art engine by the one from this repository: new_main_for_art_engine in the folder "new main for hashlips engine". It will allow you to add the qr codes to the artwork.

5. In your modified hashlips art engine add the qr codes as layers.

6. Modify what you need from the hashlips art engine to create the right json files associated with the collection.

7. Run the engine to generate the nft collection with the qr codes.

8. Come back here and modify the list with the list of QR Codes used by the engine in the uniquetester.js file. Run the uniquetester.js (node uniquetester.js) to verify that there are no duplicates qr codes.

All done.
