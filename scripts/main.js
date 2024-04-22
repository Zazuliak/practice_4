



// Отримуємо посилання на елементи з текстом за допомогою класу
let textElements = document.querySelectorAll('.registration-text');

// Отримуємо посилання на кнопку за допомогою класу
let registrations = document.querySelector('.name');

// Встановлюємо обробник події для кнопки
registrations.addEventListener('click', function() {
  // Проходимося по всіх елементах тексту та змінюємо їх стиль на display: block;
  textElements.forEach(function(textElement) {
    textElement.style.display = 'block';
  });
});



let myButton1 = document.querySelector('.name');
let myHeading = document.querySelector('.text');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Ласкаво просимо, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Ласкаво просимо, ' + storedName;
}

myButton1.onclick = function() {
  setUserName();
}


// Отримуємо посилання на елементи з текстом за допомогою класу
let textElements1 = document.querySelectorAll('.registr, .name');

// Отримуємо посилання на кнопку за допомогою класу
let registrations1 = document.querySelector('.name');

// Встановлюємо обробник події для кнопки
registrations1.addEventListener('click', function() {
  // Проходимося по всіх елементах тексту та змінюємо їх стиль на display: none;
  textElements1.forEach(function(textElement) {
    textElement.style.display = 'none';
  });
});




















// міняємо зображення

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/firefox2.png');
  } else {
    myImage.setAttribute ('src','images/firefox-icon.png');
  }
}

// міняємо фон


let myButton = document.querySelector('.fon');


// Встановлюємо обробник події для кнопки
myButton.addEventListener('click', function() {
  changeButtonText();
});

// Функція зміни тексту кнопки
function changeButtonText() {
  if (myButton.textContent === 'Нічна тема') {
    myButton.textContent = 'Денна тема';
  } else {
    myButton.textContent = 'Нічна тема';
  }
}


myButton.onclick = function() {
  let currentColor = document.body.style.backgroundColor;
  if (currentColor === "rgb(26, 26, 26)") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "rgb(26, 26, 26)";
  }
};





//стилі

let elements = document.querySelectorAll('.fon, .name, .registration-button');

elements.forEach(function(element) {
    element.style.height = '50px';
    element.style.width = '200px';
    element.style.backgroundColor = 'blue'; // Змінити колір фону на синій
    element.style.color = 'white'; // Змінити колір тексту на білий
    element.style.fontSize = '20px';

    // Встановлюємо обробник подій для наведення курсора на кнопку
    element.addEventListener('mouseover', function() {
        // Змінюємо колір тексту на червоний (#d81d1d) при наведенні курсора
        element.style.color = '#d81d1d';
        element.style.transition = 'color 0.3s linear';
    });

    // Встановлюємо обробник подій для відведення курсора від кнопки
    element.addEventListener('mouseout', function() {
        // Повертаємо колір тексту на білий (#fff) при відведенні курсора
        element.style.color = '#fff';
        element.style.transition = 'color 0.3s linear';
    });
});


//  