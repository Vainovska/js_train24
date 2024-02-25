console.log("Завдання: 9 ==============================");

function task9() {
  // Створюємо функцію fetchWithError, яка симулює помилку при запиті до сервера.
  // Створюємо константу errorMessage в яку записуємо рядок "Помилка при з'єднанні з сервером"
  // Використовуємо Promise.reject(errorMessage) для створення вже відхиленого промісу.
  // Викликаємо функцію fetchWithError
  // Якщо проміс виконаний успішно виводимо в консоль дані які він повертає
  // Якщо проміс виконаний з помилкою виводимо в консоль помилку
  function fetchWithError() {
    return new Promise((resolve, reject) => {
      const errorMessage = "Помилка при з'єднанні з сервером";
      reject(errorMessage);
    });
  }
  fetchWithError()
    .then((value) => {
      console.log(value);
    })
    .catch((err) => console.log(err));
}

// Викликаємо функцію task10
task9();
