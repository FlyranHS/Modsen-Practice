function processData(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== 'number') {
            reject(new Error('Error'));
            return;
        }

        if (data % 2 === 0) {
            setTimeout(() => {
                resolve('Even');
            }, 2000);
        }else {
            setTimeout(() => {
                resolve('Odd');
            }, 1000);
        }
    });
}

processData(5)
    .then(result => console.log(result))  
    .catch(error => console.error(error.message));

processData(8)
    .then(result => console.log(result))  
    .catch(error => console.error(error.message));

processData('not a number')
    .then(result => console.log(result))
    .catch(error => console.error(error.message));  
