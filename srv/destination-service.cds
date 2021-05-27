service DestinationService {
    entity Destinations {
        name          : String @title : 'Name';
        subaccount    : String @title : 'Subaccount';
        cfInstance    : String @title : 'Instance';
        proxyType     : String @title : 'Proxy Type';
        trustAll      : Boolean;
        type          : String;
        url           : String;
        webIDEEnabled : Boolean;
        webIDEUsage   : String;
    }
}
