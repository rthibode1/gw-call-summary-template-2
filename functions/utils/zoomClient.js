const axios = require('axios');

exports.getZoomTranscript = async (meetingId, token) => {
  return axios.get(`https://api.zoom.us/v2/meetings/${meetingId}/recordings`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};