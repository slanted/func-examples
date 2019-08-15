import {createProperty,configurationService} from '../src/configurationProperty' 

// test('create property', () => {
//     expect(createProperty).toThrow();
// })
const log = (x) => console.log(x)

let testObj = {
        id:"1",
        defaultValue: 'test',
        type: 'String',
        defaultDescription:"Some description",
        defaultLabel: 'My Property',
        category:"stuff",
        exampleUrl:"https://example.com",
        documentationUrl: "https://documentation.com",
        permissions: "jeff"
    }

test('simple', ()=> {
    expect(testObj).toBe(testObj);
});

test('US Check', ()=> {
    let usConfig = configurationService("USConfigurationContainer")
    let prop = usConfig.get("qasValidation");
    let prop2 = usConfig.get("apiEndpoint");
    expect(prop2).toBe("https://api.nuskin.com");
    expect(prop).toBe(true);
    expect(usConfig).not.toBeNull();
})

test('Canada Check', ()=> {
    let config = configurationService("CanadaConfigurationContainer")
    let prop = config.get("qasValidation");
    let prop2 = config.get("apiEndpoint");
    expect(prop2).toBe("https://api.nuskin.com");
    expect(prop).toBe(true);
    expect(config).not.toBeNull();
})
// test('create property good', ()=> {
//     expect(createProperty(testObj).id).toBe("1");
//     expect(createProperty(testObj).type).toBe("String");
// })

// test('create property with bad params', () => {
//     delete testObj.type;
//     console.log(testObj);
//     expect(() => {
//         createProperty(testObj)
//     }).toThrow();
// });