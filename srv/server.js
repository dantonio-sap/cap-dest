const cds = require("@sap/cds");
const xsenv = require("@sap/xsenv");
const destinationUtils = require("./destinationsUtils.js");

const dest_service = xsenv.getServices({ dest: { tag: "destination" } }).dest;
const uaa_service = xsenv.getServices({ uaa: { tag: "xsuaa" } }).uaa;
var destinations = [];

cds.on("served", async () => {
  // Get Destinations
  const destinationNames = ["languageService", "API_Business_Hub_Sandbox"];
  destinationUtils
    .getDestinations(uaa_service, dest_service, destinationNames)
    .then((destinations) => {
      console.log(destinations);
      cds.env.destinations = destinations;
    });
});

module.exports = cds.server; //> delegate to default server.js
