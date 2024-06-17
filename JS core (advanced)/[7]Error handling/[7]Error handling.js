function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('The provided value is not an integer.');
    }
    return "The provided value is an integer.";
}

try {
    console.log(checkInteger(5));  
    console.log(checkInteger(5.5)); 
} catch (error) {
    console.log(error.message);
}

