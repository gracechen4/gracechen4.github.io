// Write your JS in here
alert("hi! haha sorry i always hated these alert thingys and thought it was rlly funny that i could make one ~ jk this is a virus dun dun dun");

pics = [
	"/Users/grace/html/imgs/grace.jpeg",
	"/Users/grace/html/imgs/group.jpg", 
	"/Users/grace/html/imgs/pilar.jpg",
	"/Users/grace/html/imgs/fernanda.jpeg",
	"/Users/grace/html/imgs/mae.jpeg",
	"/Users/grace/html/imgs/sindu.jpg", 
	"/Users/grace/html/imgs/alisha.jpg",
	"/Users/grace/html/imgs/avery.jpeg",
	"/Users/grace/html/imgs/pilar1.jpg",
	"/Users/grace/html/imgs/fernanda1.jpeg",
	"/Users/grace/html/imgs/mae1.jpeg",
	"/Users/grace/html/imgs/sindu1.jpg", 
	"/Users/grace/html/imgs/pilar2.jpg",
	"/Users/grace/html/imgs/alisha1.jpeg",
	"/Users/grace/html/imgs/avery1.jpg",
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if (counter === 14){counter = 0;}
	img.src = pics[counter];
	counter = counter + 1;
});
