//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
//Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const button = document.getElementById('clickToRandom');
const randImage = document.createElement('img')

div1.setAttribute("style", "margin: 5px; position: fixed");
div2.appendChild(randImage);
randImage.setAttribute("style", "margin: 40px; width: 40%");


button.addEventListener('click', () => {
    const rand = Math.ceil(Math.random() * 9);
    randImage.src = 'images/' + rand + '.jpg';
});