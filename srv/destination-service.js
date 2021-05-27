module.exports = function () {
  this.on("READ", "Destinations", (req) => {
    //Read from variable stored at startup of service and map to cds model.
    return cds.env.destinations?.map((dest) => ({
      name: dest.destinationConfiguration.Name,
      subaccount: dest.owner.SubaccountId,
      cfInstance: dest.owner.InstanceId,
      proxyType: dest.destinationConfiguration.ProxyType,
      trustAll: dest.destinationConfiguration.TrustAll === "true",
      type: dest.destinationConfiguration.Type,
      url: dest.destinationConfiguration.URL,
      webIDEEnabled: dest.destinationConfiguration.WebIDEEnabled === "true",
      webIDEUsage: dest.destinationConfiguration.WebIDEUsage,
    }));
  });
};
