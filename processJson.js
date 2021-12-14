
var result = {}; //result object to collect all the data

exports.main = (obj) => {

    //creating count object to filter data for ip click more than 10
    var countObj = obj.reduce((_json, obj) => {
        if (_json.hasOwnProperty(obj.ip)) {
            _json[obj.ip]++;
        } else {
            _json[obj.ip] = 1;
        };
        return _json;
    }, {});



    obj.map((value, index) => {
        let i = new Date(value.timestamp)
        //creating intervals and assigning them initial data    
        let _date = "_Y_" + i.getFullYear() + "_M_" + i.getMonth() + "_D_" + i.getDate() + "_H_" + i.getHours()
        if (countObj[value.ip] < 10) {
            if (result[value.ip + _date]) {
                if (new Date(result[value.ip + _date].value.timestamp) <= i) {
                    if (result[value.ip + _date].value.amount == value.amount) {
                        result[value.ip + _date].value = value
                    } else if (result[value.ip + _date].value.amount < value.amount) {
                        result[value.ip + _date].value = value
                    }
                }



            } else {
                result[value.ip + _date] = {
                    value,
                    interval: _date
                }
            }
        }

    })

    //creating array to return from our processed data object result
    var _result = []
    Object.keys(result).map(val => {
        _result.push(result[val].value)
    })

    return _result
    

}