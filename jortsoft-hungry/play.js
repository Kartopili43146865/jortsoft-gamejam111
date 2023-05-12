let time = 60;
console.log(localStorage.getItem("record"))
if(localStorage.getItem("record") === null)
localStorage.setItem("record", 0)
console.log(localStorage.getItem("record"))

document.querySelector(".record div").textContent = localStorage.getItem("record")

if(localStorage.getItem("myTime") != undefined)   {
  time = localStorage.getItem("myTime")
}
let istop = true
let data = 0
if (localStorage.getItem("myData") === null) {
  // If it doesn't exist, set it to 0
  localStorage.setItem("myData", "0");
}
let currentValue = parseInt(localStorage.getItem("myData"))

let coin = parseInt(localStorage.getItem("myData"))
document.querySelector('.coin div').textContent = coin
// icons
const playIcon = document.querySelector('.fa-play')
const pauseIcon = document.querySelector('.fa-pause')

const pause = document.querySelector('.pause')
pause.addEventListener('click', function(){
  if(istop)
   bgsound.pause();
  else
  bgsound.play();
  istop = !istop
  playIcon.classList.toggle('hide')
  pauseIcon.classList.toggle('hide')
})
let eatAudio = new Audio('./sounds/eat.mp3')
let eatingAudio = new Audio('./sounds/eating.mp3')
let loseSound = new Audio('./sounds/lose.wav')
let loseSound2 = new Audio('./sounds/lose.mp3')
loseSound2.volume = 0.5
let b = true
const bgsound = document.getElementById('bgSound')

bgsound.volume = 0.1
const interval = setInterval(() => {
  if(istop)
    time--;
    document.querySelector('.time div').textContent = time
  if(time == 0){
      document.querySelector('.lose').classList.remove('hide')
      document.querySelector('.score-2 span').textContent = score
      currentValue += score
      if(currentValue > 0)
      localStorage.setItem("myData", currentValue.toString());
    b = false
    bgsound.volume = 0
    loseSound.play()
    loseSound2.play()
    if(currentValue > parseInt(localStorage.getItem("record"))){
      localStorage.setItem("record", currentValue)
      document.querySelector(".record div").textContent = localStorage.getItem("record")
    }
  }
  if(time <= 10) {
    document.querySelector('.time div').style.transform = 'scale(2.1)'
  } else {
    document.querySelector('.time div').style.transform = 'scale(1)'
  }
}, 1000);
document.querySelector('.reload').addEventListener('click', function(){
  location.reload()
})
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  const width = window.innerWidth;
  const height = window.innerHeight - 80;

  canvas.width = width;
  canvas.height = height;
}
const span = document.querySelectorAll('.oz span')

// Call the resizeCanvas function initially and whenever the window is resized
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let score = 0;
let gameFrame = 0;
ctx.font = '24px Georgia';

let canvasPosition = canvas.getBoundingClientRect();

const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
};

canvas.addEventListener('mousedown', function(event) {
  if(istop){
  mouse.click = true;
  mouse.x = event.x - canvasPosition.left;
  mouse.y = event.y - canvasPosition.top;
  }
});
canvas.addEventListener('mouseup', function() {
  mouse.click = false;
});
let size = 70

if(localStorage.getItem("mySize") != null){
  size = parseInt(localStorage.getItem("mySize"));
}

let speed = 15

if(localStorage.getItem("mySpeed") != null){
  speed = parseInt(localStorage.getItem("mySpeed"));
}

class Player {
  constructor() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.size = size;
    this.image = new Image();
    this.image.src = './images/jort.png'; // Replace with the path to your image
  }

  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    if(istop) {
    if (mouse.x !== this.x) {
      this.x -= dx / speed;
    }
    if (mouse.y !== this.y) {
      this.y -= dy / speed;
    }
  }
  }

  draw() {
    if (mouse.click && istop) {
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
    ctx.drawImage(
      this.image,
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
  }
}
let n = Math.random() * 6 + 2
const player = new Player();


let arr = [0,0,0,0]


class Language {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * canvas.height;
    this.size = 50;
    this.distance;
    this.image = new Image();
    n = Math.random() * (11 - 3) + 3
    this.speed = n;
    if(n <= 5){
      this.id = 0
      this.score = 1
      this.image.src = 'data:image/png;base64,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'; // Replace with the path to your image
    }else if(n <= 6.5 && n >= 5){
      this.id = 1
      this.score = 2
      this.image.src = "data:image/png;base64,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"
    } else if(n <= 7.5 && n >= 6.5){
      this.id = 2
      this.score = 3
      this.image.src = 'data:image/png;base64,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'
    }
    else if(n <= 8 && n >= 7.5) {
      this.id = 3
      this.score = 4
      this.image.src = 'data:image/png;base64,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'; // Replace with the path to your image
      
    }
    else if(n <= 11 && n >= 8) {
      this.id = 4
      this.score = -4
      this.image.src = 'data:image/png;base64,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'; // Replace with the path to your image
      
    }
  }

  update() {
    this.y -= this.speed;
  }

  draw() {
    ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}
const languagesArray = [];

function handleLanguages() {
  if (gameFrame % 30 === 0) {
    if(istop)
    languagesArray.push(new Language());
  }
  for (let i = 0; i < languagesArray.length; i++) {
    if(istop) 
    languagesArray[i].update();
    languagesArray[i].draw();

    if (collision(player, languagesArray[i])) {
      let splicedObject = languagesArray.splice(i, 1)[0];
      if(b){
        if(splicedObject.id != 4)
         eatAudio.play()
        else
        eatingAudio.play()
      }
      i--;
      score += splicedObject.score
      if(splicedObject.id != 4) {
        console.log(localStorage.getItem("record"),score)
        if(score > parseInt(localStorage.getItem("record"))){
          localStorage.setItem("record", score)
          document.querySelector(".record div").textContent = localStorage.getItem("record")
        }
        arr[splicedObject.id]++
      span[splicedObject.id].textContent = arr[splicedObject.id] 
    }
    document.querySelector('.score span').textContent = score
      
      for(let i = 0; i < arr.length; i++){
        if(arr[i] == 5){
          arr[i] = 0
          span[splicedObject.id].textContent = arr[splicedObject.id]
          time += splicedObject.score * 2
          document.querySelector('.time div').textContent = time
          const div = document.createElement('div')
          div.classList.add('addTime')
          div.innerHTML = `+<span>${splicedObject.score * 2}</span> second`
          document.querySelector('.ul').appendChild(div)


setTimeout(() => {
  div.remove();
}, 1000);
        }
      }
    }
  }
}

function collision(player, language) {
  return (
    player.x < language.x + language.size &&
    player.x + player.size > language.x &&
    player.y < language.y + language.size &&
    player.y + player.size > language.y
  );
}

// Animation loop
function animate() {
  gameFrame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  player.draw();
  handleLanguages();
  requestAnimationFrame(animate);
}

animate();
