const processJson = require('./processJson');
var main = require('./main');
var fs = require('fs')

var clickJson

processJson.main = jest.fn()

describe(
    "Test For ProcessJson Function",
    () => {
        it("Process Json has main funciton", () => {
            expect(
                typeof processJson.main
            ).toBe('function')
        });

    }
)