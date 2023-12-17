const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const ColorGenerator = () => {
  const hex = '0123456789ABCDEF';
  let randomColor = '#';

  for (let i = 0; i < 6; i++) {
    randomIndex = Math.floor(Math.random() * 16);

    randomColor += hex[randomIndex];
  }
  return randomColor;
};

const ColorChanger = () => {
  let Color = ColorGenerator();
  document.body.style.backgroundColor = Color;
};

let intervalId;
const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(ColorChanger, 1000);
  }
  console.log(intervalId);
};

start.addEventListener('click', startChangingColor);

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

stop.addEventListener('click', stopChangingColor);
