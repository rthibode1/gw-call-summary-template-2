const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();

exports.getSecret = async (name) => {
  const [version] = await client.accessSecretVersion({
    name: `projects/${process.env.GCP_PROJECT}/secrets/${name}/versions/latest`,
  });
  return version.payload.data.toString('utf8');
};