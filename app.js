// Write your JS in here
alert("hi! haha sorry i always hated these alert thingys and thought it was rlly funny that i could make one ~ jk this is a virus dun dun dun");

pics = [
	"imgs/grace.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/group.jpg", 
	"/Users/grace/html/gracechen4.github.io/imgs/pilar.jpg",
	"/Users/grace/html/gracechen4.github.io/imgs/fernanda.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/mae.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/sindu.jpg", 
	"/Users/grace/html/gracechen4.github.io/imgs/alisha.jpg",
	"/Users/grace/html/gracechen4.github.io/imgs/avery.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/pilar1.jpg",
	"/Users/grace/html/gracechen4.github.io/imgs/fernanda1.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/mae1.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/sindu1.jpg", 
	"/Users/grace/html/gracechen4.github.io/imgs/pilar2.jpg",
	"/Users/grace/html/gracechen4.github.io/imgs/alisha1.jpeg",
	"/Users/grace/html/gracechen4.github.io/imgs/avery1.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if (counter === 14){counter = 0;}
	img.src = pics[counter];
	counter = counter + 1;
});
