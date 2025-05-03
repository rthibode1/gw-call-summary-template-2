const hubspot = require('@hubspot/api-client');
const { getSecret } = require('./secretManager');

let cachedClient;

exports.getHubSpotClient = async () => {
  if (!cachedClient) {
    const token = await getSecret('HUBSPOT_PRIVATE_APP_TOKEN');
    cachedClient = new hubspot.Client({ accessToken: token });
  }
  return cachedClient;
};