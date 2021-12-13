var fs = require('fs');
var obj;

var result = {};

exports.main = (inputFile, outputFile) => {
    fs.readFile(inputFile, (err, data) => {
        if (err) throw err;;
        obj = JSON.parse(data)
        obj.map((value, index) => {
            let i = new Date(value.timestamp)
            let interval = i.getHours()

            let _date = "_Y_" + i.getFullYear() + "_M_" + i.getMonth() + "_D_" + i.getDate() + "_I_" + interval
            // console.log(value.ip+'I'+interval)
            if (result[value.ip + _date] && result[value.ip + _date].count < 10) {
                //do some logic
                // console.log("time in result > ",result[value.ip+'_I_'+interval].value.timestamp )
                if (new Date(result[value.ip + _date].value.timestamp) <= i) {
                    // console.log("yes the current is lates")
                    if (result[value.ip + _date].value.amount == value.amount) {
                        result[value.ip + _date].value = value
                    } else if (result[value.ip + _date].value.amount < value.amount) {
                        result[value.ip + _date].value = value
                    }
                }
                result[value.ip + _date].count++


            } else {
                result[value.ip + _date] = {
                    value,
                    interval: interval,
                    count: 1
                }
            }
        })



        let _res = [];
        Object.keys(result).map(val => {
            if (result[val].count <= 9) {
                _res.push(result[val].value)
            }
        })
        fs.writeFile(
            outputFile,
            JSON.stringify(_res),
            function (err) {
                if (err) throw err;
                console.log('Operation Done Check the result.json')
            }
        )
    })
}
