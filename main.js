var processJson = require('./processJson');
var fs = require('fs');
exports._func = async (inputData) => {
    return await processJson.main(inputData)
}
exports.func = async (inputFile, outputFile) => {
    var obj;
    var processedData;
    try {
        //reading data from input file
        fs.readFile(inputFile, async (err, data) => {
            if (err) throw err
            obj = JSON.parse(data)

            //processing that data usning _func() 
            processedData = await this._func(obj);

            //writing the data to result.json file
            fs.writeFile(outputFile, JSON.stringify(processedData), (err) => {
                if (err) throw err;
                //operation done
                console.log('Result are stored in result.json')
            })

        })

    } catch (err) {
        //consoling if any err occurs
        console.log(err)
    }
}