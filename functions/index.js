const { onRequest } = require('firebase-functions/v2/https');
const extractZoomId = require('./handlers/extractZoomId');
const writeTranscript = require('./handlers/writeTranscript');
const matchAssociateCalls = require('./handlers/matchAssociateCalls');

exports.extractZoomId = onRequest({ cors: true }, extractZoomId);
exports.writeTranscript = onRequest({ cors: true }, writeTranscript);
exports.matchAssociateCalls = onRequest(
  { cors: true, labels: { environment: "production" } },
  matchAssociateCalls
);