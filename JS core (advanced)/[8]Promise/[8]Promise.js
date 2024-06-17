
function asyncOperation(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Operation with value: ${value}`);
            resolve(value + 1);
        }, 1000);
    });
}

function executeSequentially(initialValue, operations) {
    let promise = Promise.resolve(initialValue);
    for (let operation of operations) {
        promise = promise.then(operation);
    }
    return promise;
}

const operations = [
    (val) => asyncOperation(val),
    (val) => asyncOperation(val),
    (val) => asyncOperation(val)
];

executeSequentially(0, operations)
    .then(finalValue => {
        console.log(`Final value: ${finalValue}`);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
