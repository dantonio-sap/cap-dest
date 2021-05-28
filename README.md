# Setup for this sample

- Create UAA and Destination Service instances in the CF space, this mta project assumes they already exist
    - cf-uaa
    - cf-destinations

- To run locally without deploying, create default-env.json in root of project with crednentials and name with environment variables from corresponding service keys

Example:
```javascript
{
  "VCAP_SERVICES": {
    "xsuaa": [
      {
        "name": "cf-uaa",
        "label": "xsuaa",
        "tags": ["xsuaa"],
        "credentials": {
          <Paste uaa service key data here>
        }
      }
    ],
    "destination": [
      {
        "name": "cf-destinations",
        "label": "destination",
        "tags": ["destination"],
        "credentials": {
          <Paste destination service key data here>
        }
      }
    ]
  }
}
```
