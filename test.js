const processJson = require('./processJson');
var main = require('./main');

mockData = [{
        "ip": "11.11.11.11",
        "timestamp": "3/11/2020 02:13:11",
        "amount": 7.25
    }, {
        "ip": "44.44.44.44",
        "timestamp": "3/11/2020 02:13:54",
        "amount": 8.75
    }]
describe(
    "Test For ProcessJson Function",
    () => {
        it("Process Json has main funciton", () => {
            expect(
                typeof processJson.main
            ).toBe('function')
        });
        it("main._func call processJson.main with array of objects", ()=>{
            processJson.main = jest.fn()

            main._func(mockData)
            expect(processJson.main).toBeCalledWith(mockData)
        })
    }
)