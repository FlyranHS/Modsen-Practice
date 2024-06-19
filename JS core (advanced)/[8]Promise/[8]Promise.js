function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function squareAfterDelay(value) {
    return delay(3000).then(() => value * value);
  }
  
  const initialPromise = Promise.resolve(2);
  
  initialPromise
    .then(result => {
      console.log(`Первый результат: ${result}`); // 2
      return squareAfterDelay(result);
    })
    .then(result => {
      console.log(`Второй результат (первый в квадрате): ${result}`); // 4
      return squareAfterDelay(result);
    })
    .then(result => {
      console.log(`Третий результат (второй в квадрате): ${result}`); // 16
      return squareAfterDelay(result);
    })
    .then(result => {
      console.log(`Четвертый результат (третий в квадрате): ${result}`); // 256
    })
    .catch(error => {
      console.error(`Ошибка: ${error}`);
    });
  