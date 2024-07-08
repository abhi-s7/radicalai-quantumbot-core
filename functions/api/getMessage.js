/* eslint-disable object-curly-spacing, indent */

const functions = require("firebase-functions");
// const admin = require("firebase-admin");
const { logger } = functions;

exports.getMessage = functions.https.onRequest((request, response) => {
  // we can also write this way
  // export const helloworld = v2.https.onRequest((request, response) => {
  // debugger;
  // functions call back
  const name = request.params[0].replace("/", "");
  logger.log("name is", name);
  const items = { lamp: "This is a lamp", chair: "Good chair" };
  const message = items[name];
  response.send(`<h1>${message}</h1>`);
});

/* eslint-enable object-curly-spacing, indent */
