let balance = 100;  
const minNumber = 1;
const maxNumber = 5;
const maxAttempts = 3; 

function guessNumber() {
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

    for (let i = 1; i <= maxAttempts; i++) {
        const userGuess = parseInt(prompt(`Виберіть число від 1 до 5 (Спроба ${i}/${maxAttempts})`));

        if (userGuess === randomNumber) {
            let reward;
            if (i === 1) {
                reward = 40;
            } else if (i === 2) {
                reward = 20;
            } else {
                reward = 10;
            }

            balance += reward;
            alert(`Ви вгадали число ${randomNumber}! Ви виграли $${reward}. Ваш баланс: $${balance}`);
            askToRestart();  
            return; 
        } else {
            alert(`Ви не вгадали! Спроба ${i}/${maxAttempts}.`);
        }

        if (i === maxAttempts) {
            balance -= 20;  
            alert(`Ви не вгадали число за 3 спроби! Ви втратили $10. Правильне число було ${randomNumber}. Ваш баланс: $${balance}`);
            askToRestart();  
        }
    }
}

function askToRestart() {
    const playAgain = confirm(`Бажаєш зіграти ще раз? Ну давай можливо цього разу заробиш більшеб або ні:) Твій баланс зараз ` + balance+'$');
    if (playAgain) {
        guessNumber(); 
    } else {
        alert("Дякуємо за гру! Будемо чекати на вас, Ваш остаточний баланс: $" + balance);
    }
}

guessNumber();
