
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 20;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

var score = 0; 
let snake = [];
let d = "right";
//let text();

snake[0]= {
	x : (Math.floor(Math.random() *
		columns)) * scale,
	y : (Math.floor(Math.random() *
		rows)) * scale
};
console.log(snake);

let food = {
	x : (Math.floor(Math.random() *
		columns)) * scale, 
	y : (Math.floor(Math.random() *
		rows)) * scale
}
//console.log(snake);
let playGame = setInterval(draw,100);


function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
  //text('score:' + score, '30px comic sans Ms', 0, 0, 'white');
  //ctx.fillStyle = "#fff";
	//fillrect
	//strokerect
	//console.log("draw");
     //text('score:' + Math.floor(score),'30px comic sans Ms',10, 30, #fff);
		// if (snake > 499) {
	for (let i=0; i<snake.length; i++) {
		ctx.fillStyle = "#fff";
		ctx.strokeStyle = "red";
		ctx.fillRect(snake[i].x,
			snake[i].y, scale, scale);
		ctx.strokeRect(snake[i].x,snake[i].y,scale,scale); 
		
	}
  //      //food image
  //       var  image = document.getElementById("myFood");
  //       ctx. drawImage(image,food.x, food.y, scale, scale);

  // //text = ('score:' + score, '30px comic sans Ms', 0, 0, 'white');

	ctx.fillStyle = "#ff0";
	ctx.strokeStyle = "green";
	ctx.fillRect(food.x, food.y, scale, scale);
	ctx.strokeRect(food.x, food.y,scale,scale);
  ctx.fillText('score:' + score, 10, 20);
  ctx.font = '25px verdana';

	// old head position
	
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	//console.log(snakeX);
  // which direction
  if( d == "left") snakeX -= scale;
  if( d == "up") snakeY -= scale;
  if( d == "right") snakeX += scale;
  if( d == "down") snakeY += scale;

       //new head position


  if (snakeX > canvas.width ) {
  	snakeX = 0;
  }
  if (snakeY > canvas.height) {
  	snakeY = 0;
  }
  if (snakeX < 0) {
  	snakeX = canvas.width;
  }
  if (snakeY < 0) {
  	snakeY = canvas.height;
  }
   // if the snake eats the food, it grows 
  if(snakeX == food.x && snakeY == food.y){
      score++;
      food = {
          x : (Math.floor(Math.random() * columns)) * scale,
          y : (Math.floor(Math.random() * rows)) * scale
      }
      // we don't remove the tail
  }else{
      // remove the tail
      snake.pop();
  }
 // console.log(snake);
  // New head position 
  let newHead = {
      x : snakeX,
      y : snakeY
  }
    if(eatSelf(newHead,snake)){
  	clearInterval(playGame);
  }
  snake.unshift(newHead);
}

// check if snake is eating itself 
function eatSelf(newHead,array){
  for(let i = 0; i < array.length; i++){
      if(newHead.x == array[i].x && newHead.y == array[i].y){
          return true;
      }
  }
  return false;
}


 document.onkeydown = direction;

function direction(event){
	let key = event.keyCode;
	if( key == 37 && d != "right"){
		d = "left";
	}else if(key == 38 && d != "down"){
		d = "up";
	}else if(key == 39 && d != "left"){
		d = "right";
	}else if(key == 40 && d != "up"){
		d = "down";
	}
}

//console.log(text);