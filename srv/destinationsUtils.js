const { resolve } = require("@sap/cds");
const axios = require("axios");
let uaa_token = null;

const destinationUtils = {
  getDestinations: (uaa_service, dest_service, destinationNames) => {
    return Promise.all(
      destinationNames.map((name) =>
        destinationUtils.getDestination(uaa_service, dest_service, name)
      )
    );
  },

  getDestination: async (uaa_service, dest_service, destinationName) => {
    try {
      if (!uaa_token) {
        // GET UAA TOKEN
        const formData = new URLSearchParams();
        formData.append("client_id", dest_service.clientid);
        formData.append("grant_type", "client_credentials");

        const tokenResponse = await axios.request({
          method: "post",
          url: `${uaa_service.url}/oauth/token`,
          auth: {
            username: dest_service.clientid,
            password: dest_service.clientsecret,
          },
          data: formData,
        });

        uaa_token = tokenResponse.data.access_token;
      }

      // GET DESTINATION
      const destResponse = await axios.request({
        url: `${dest_service.uri}/destination-configuration/v1/destinations/${destinationName}`,
        headers: {
          Authorization: `Bearer ${uaa_token}`,
        },
      });

      const oDestination = destResponse.data;

      return oDestination;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = destinationUtils;
