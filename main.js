var processJson = require('./processJson');

try {
    processJson.main("clicks.json", "result.json")
} catch (err) {
    console.log(err)
}