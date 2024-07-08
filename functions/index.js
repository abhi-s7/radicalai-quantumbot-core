/* eslint-disable object-curly-spacing, indent */

const admin = require("firebase-admin");
admin.initializeApp();

const { addMessage } = require("./api/addMessage");
const { getMessage } = require("./api/getMessage");

exports.addMessage = addMessage;
exports.getMessage = getMessage;

/* eslint-enable object-curly-spacing, indent */
