// 1. Используя рекурсию попросите пользователя ввести возраст, если он больше 18, то покажите сообщение об успехе, если меньше, то запустите функцию снова.

function writeAge() {
  let age = prompt('Введите ваш возраст');
  if (age > 18) {
    alert ('Успешно. Ваш возраст больше 18 лет');
    return;
  } else {
    writeAge()
  }
}

writeAge()