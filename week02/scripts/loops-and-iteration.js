const DAYS = 6;
const LIMIT = 30;
let studentReport = [11,42,33,64,29,37,44];

function forLoop(LIMIT, studentReport) {
    for(let index =0;index<studentReport.length;index++) {
        if(studentReport[index]<LIMIT) {
            console.log(studentReport[index]);
        }
    }
}
function whileLoop(LIMIT, studentReport) {
    let index = 0;
    while(index < studentReport.length) {
        if(studentReport[index]<LIMIT) {
            console.log(studentReport[index]);
        }
        index++;
    }
}
function forEachLoop(LIMIT, studentReport) {
    studentReport.forEach(function(item) {
        if(item <LIMIT) {
            console.log(item);
        }
    });
    let index = 0;
    while(index < studentReport.length) {
        if(studentReport[index]<LIMIT) {
            console.log(studentReport[index]);
        }
        index++;
    }
}
function forInLoop(LIMIT, studentReport) {
    for(let i in studentReport) {
        if(studentReport[i]<LIMIT) {
            console.log(studentReport[i]);
        }
    }
}

forLoop(LIMIT,studentReport);
whileLoop(LIMIT,studentReport);
forEachLoop(LIMIT,studentReport);
forInLoop(LIMIT,studentReport);
