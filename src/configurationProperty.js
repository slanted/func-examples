let configurations = {
    globalConfigurationContainer: {
        name: "Global Configuration",
        properties: {
            qasValidation: false,
            apiEndpoint: "https://api.nuskin.com"
        }
    },
    americasConfigurationContainer: {
        name: "Americas Configuration",
        parent: "globalConfigurationContainer",
        properties: {
            qasValidation: true,
            searchEnabled: false
        }
    },
    USConfigurationContainer: {
        name: "US Configuration",
        parent:"americasConfigurationContainer",
        properties: {
            qasValidation: true
        }
    },
    CanadaConfigurationContainer: {
        name: "Canada Configuration",
        properties: {
                qasValidation: true
        },
        parent: "americasConfigurationContainer"
    }
}

const configurationPropertySet = new Set([
    "id",
    "defaultValue",
    "type",
    "defaultDescription",
    "defaultLabel",
    "category",
    "exampleUrl",
    "documentationUrl",
    "permissions"
]);

const configurationProperties = {
        qasValidation: {
            defaultValue: false,
            type: "Boolean",
            defaultDescription: "Toggle to turn on QAS Address Validation",
            defaultLabel: "QAS Validation",
            category: "Address",
            exampleUrl: "",
            documentationUrl: "",
            permissions: ["developer", "analyst"]
        },
        apiEndpoint: {
            defaultValue: "http://api.nuskin.com",
            type: "String",
            defaultDescription: "API Endpoint",
            defaultLabel: "API Endpoint",
            category: "API",
            exampleUrl:"",
            documentationUrl: "",
            permissions: ["developer"]
        },
        searchEnabled: {
            defaultValue: true,
            type: "Boolean",
            defaultDescription: "Turn search on or off",
            defaultLabel: "Search Enabled",
            category: "Search",
            exampleUrl: "",
            documentationUrl: "",
            permissions: ["developer", "analyst"]
        }
}

const assembleConfiguration = (configName) => {
    let config = configurations[configName];
    let configs = [config];
    while (config.parent) {
        configs.push(configurations[config.parent]);
        let newConfig = configurations[config.parent]
        config = newConfig;
    }

    let merged = configs.reduce((prev, curr) => {
        let newProperties = Object.assign({}, curr.properties, prev.properties);
        return {
            name:"Merged",
            properties: newProperties
        }
    });
    
    return merged;
}

export const configurationService = (configName) => {
    let configurations = assembleConfiguration(configName);

    function get(configName) {
        return configurations.properties[configName];       
    }

    // config object
    return {
        get
    }
}


// let usConfig = configurations.get("US");

// let qasValidation = usConfig.get("qasValidation");



const contains = (key, obj) => (key in myObj);

const validate = (properties, set) => {
    console.log("set:",set)
    let keys = Object.keys(set)
    console.log("keys:", keys);
    var valid = keys.every(key => {
        let contains = key in properties
        console.log(`contains ${key}: ${contains}`);
        return contains;
    })
    return valid;
}
export const createProperty = (properties) => {
    let valid = validate(properties, configurationPropertySet);
    if (valid) {
        let myproperties = Object.assign({}, properties);
        return myproperties;
    } else {
        throw new Error(`Can't create configuration property. ${properties} are invalid`);
    }
}

const createConfigurationContainer = (properties) => {
    let myproperties = Object.assign({}, properties);

    return myproperties;
}