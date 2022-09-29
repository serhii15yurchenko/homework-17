// // Мінімум

// // Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, 
// // середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// // Метод, який виводить на екран інформацію про автомобіль.
// // Додавання ім’я водія у список
// // Перевірка водія на наявність його ім’я у списку
// // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// // Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let car = {
    brand: 'Volvo',
    model: 'xc90',
    year: '2022',
    'middle speed': 120,
    tank: 71,
    'fuel consumption': 7.9,
    driver: 'Serhii',
    info: function () {
        return `Бренд: ${car.brand}, Модель: ${car.model}, Рік: ${car.year}, Середня швидкість: ${car['middle speed']}, Об'єм бака: ${car.tank}, Витрата палива: ${car['fuel consumption']}, Водій: ${car.driver}`
    },
    addNewDriwer: function(key, nameDriver) {
       return `Бренд: ${car.brand}, Модель: ${car.model}, Рік: ${car.year}, Середня швидкість: ${car['middle speed']}, Об'єм бака: ${car.tank}, Витрата палива: ${car['fuel consumption']}, Водій: ${car.driver}, Інший водій: ${car.key = nameDriver}`
    },
    checkDriver: function(nameDriver) {
        if(nameDriver === car.driver) {
            return `${nameDriver} є в списку`;
        } else {
            return `${nameDriver} немає в списку`;
        }
    },
    dataTrip: function (distance) {
        let time = distance / car['middle speed'];
        let fuel = distance * car['fuel consumption'] /car['middle speed'];
        let fullTime = time + time / 4;
        return `${car.brand}: ${car.model} проїде дистанцію в ${distance} км зсередньою швидкістю ${car['middle speed']}, за ${fullTime} годин, та витратить палива ${fuel} літрів`;
    }
};

// Метод, який виводить на екран інформацію про автомобіль.
console.log(car.info());

// Додавання ім’я водія у список
console.log(car.addNewDriwer('driver2','Ivan'));

// Перевірка водія на наявність його ім’я у списку
console.log(car.checkDriver('Petro'));

// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
console.log(car.dataTrip(250));

// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
// Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
// Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let time = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    showTime: function () {
        return `Зараз ${time.hours} годин, ${time.minutes} хвилин, ${time.seconds} секунд`;
    },
    addSec: function (sec) {
        if (sec < 0 || isNaN(sec)) {
            return `error`;
        } else if (sec < 60) {
            time.seconds = time.seconds + sec;
           return `${time.hours} : ${time.minutes} : ${time.seconds}`;
        } else if (sec === 60) {
            time.minutes = time.minutes + 1;
           return `${time.hours} : ${time.minutes} : ${time.seconds}`;
        } else if (sec > 60 && sec < 3600) {
            time.minutes = time.minutes + Math.floor(sec / 60);
            sec = sec % 60;
            return `${time.hours} : ${time.minutes} : ${sec}`;
        }
    },

    addMin: function (min) {
        if (min < 0 || isNaN(min)) {
            return `error`;
        } else if (min < 60) {
            time.minutes = time.minutes + min;
           return `${time.hours} : ${time.minutes} : ${time.seconds}`;
        } else if (min === 60) {
            time.hours = time.hours + 1;
           return `${time.hours} : ${time.minutes} : ${time.seconds}`;
        } else if (min > 60 && min < 1440) {
            time.hours = time.hours + Math.floor(min / 60);
            min = min % 60;
            return `${time.hours} : ${min} : ${time.seconds}`;
        }
    },

    addHour: function (hour) {
        if (hour < 0 || isNaN(hour)) {
            return `error`;
        } else if (hour < 24) {
            time.hours = time.hours + hour;
           return `${time.hours} : ${time.minutes} : ${time.seconds}`;
        } else if (hour >= 24) {
            hour = hour % 24;
            return `${hour} : ${time.minutes} : ${time.seconds}`;
        }
    }

    
}
// Для виведення часу на екран
console.log(time.showTime())

// Зміни часу на передану кількість секунд.
console.log(time.addSec(123))

// Зміни часу на передану кількість хвилин.
console.log(time.addMin(65))

// Зміни часу на передану кількість годин.
console.log(time.addHour(13))


// // Максимум

// // Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
// // Складання 2-х об'єктів-дробів.
// // Віднімання 2-х об'єктів-дробів.
// // Множення 2-х об'єктів-дробів.
// // Ділення 2-х об'єктів-дробів.
// // Скорочення об'єкта-дробу.
// // (Тобі потрібно буде створити ще деякі методи не зазначені в завданні, для отримання математично правильної відповіді)

let first = {
    numerator: 3,
    denominator: 6,

    sum: function (a, b) {
        if (first.denominator === b) {
            a = a + first.numerator;
            return `${a} / ${b}`;
        } else {
            let numerator = (b * first.numerator) + (a + first.denominator);
            let denominator = first.denominator * b;
            return `${numerator}/${denominator}`;
        }
    },

    subtraction: function (a, b) {
        if(first.denominator === b) {
            a = a - first.numerator;
            return `${a} / ${b}`;
        } else {
            let numerator = (b * first.numerator) - (a + first.denominator);
            let denominator = first.denominator * b;
            return `${numerator}/${denominator}`;
        }
    },

    multiplication: function (a, b) {
        numerator = first.numerator * a;
        denominator = first.denominator * b;
        return `${numerator}/${denominator}`;
    },

    division: function (a, b) {
        numerator = first.numerator * b;
        denominator = first.denominator * a;
        return `${numerator}/${denominator}`;
    },

    abbreviation: function (a, b) {
        for (i = 1; i < b; i++) {
            if (a % i === 0 && b % i === 0) {
                a = a / i,
                b = b / i;
            }
        }
        return `${a}/${b}`;
    }

};

let second = {
    numerator: 3,
    denominator: 9
};


// Складання 2-х об'єктів-дробів.
console.log(first.sum(second.numerator, second.denominator));

// Віднімання 2-х об'єктів-дробів.
console.log(first.subtraction(second.numerator, second.denominator));

// Множення 2-х об'єктів-дробів.
console.log(first.multiplication(second.numerator, second.denominator));

// Ділення 2-х об'єктів-дробів.
console.log(first.division(second.numerator, second.denominator));

// Скорочення об'єкта-дробу.
console.log(first.abbreviation(second.numerator, second.denominator));