const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;