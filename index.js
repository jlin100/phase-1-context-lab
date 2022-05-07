/* Your Code Here */
function createEmployeeRecord(employee) {

    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3], 
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(employees) {
   return employees.map(employee => createEmployeeRecord(employee)) 
}

function createTimeInEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }
    this.timeInEvents.push(eventObj)
    return this
}

function createTimeOutEvent(event) {
    let [date, hour] = event.split(" ")
    let eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }
    this.timeOutEvents.push(eventObj)
    return this
}









function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(eventIn => eventIn.date === date);
    const timeOut = this.timeOutEvents.find(eventOut => eventOut.date === date);
    return (timeOut.hour - timeIn.hour)/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

// function calculatePayroll(employeeRecords) {
//     return employeeRecords.map(employee => allWagesFor.blind(employee))
// .reduce((currentValue, total) => currentValue + total)
// }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function findEmployeeByFirstName(srcArray, fName) {
    return srcArray.find(record => record.firstName === fName)
}

function calculatePayroll(recordsArray) {
    return recordsArray.reduce((total, rec) => {
        return total + allWagesFor.call(rec)
    }, 0)
}