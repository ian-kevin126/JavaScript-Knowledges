var busyStudent = function(startTime, endTime, queryTime) {
    let result = 0;
    let length = startTime.length;
    for (let i = 0; i < length; i++) {
        result += +(startTime[i] <= queryTime && endTime[i] >= queryTime);
    }
    return result;
};