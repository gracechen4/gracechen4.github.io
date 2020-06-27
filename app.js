// Write your JS in here
alert("hi! haha sorry i always hated these alert thingys and thought it was rlly funny that i could make one ~ jk this is a virus dun dun dun");

pics = [
	"imgs/grace.jpeg",
	"imgs/group.jpg", 
	"imgs/pilar.jpg",
	"imgs/fernanda.jpeg",
	"imgs/mae.jpeg",
	"imgs/sindu.jpg", 
	"imgs/alisha.jpg",
	"imgs/avery.jpeg",
	"imgs/pilar1.jpg",
	"imgs/fernanda1.jpeg",
	"imgs/mae1.jpeg",
	"imgs/sindu1.jpg", 
	"imgs/pilar2.jpg",
	"imgs/alisha1.jpeg",
	"imgs/avery1.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if (counter === 14){counter = 0;}
	img.src = pics[counter];
	counter = counter + 1;
});
