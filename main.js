
rms=1;

	var song, analyzer;
yola=['rgba(0,0,0,0.25)','rgba(0,0,0,0.15)','rgba(0,0,0,0.15)','rgba(0,0,0,0.1)','rgba(0,0,0,0.1)'];
function preload() {
	files=['Nucleya - BASS Rani - Aaja','Coldplay - Hymn For The Weekend','Manali Trance  - The Shaukeens','Ott - Smoked Glass and Chrome','The Beatles - Strawberry Fields Forever'];

  selectedindex=parseInt(Math.random()*files.length);
  song=loadSound(files[selectedindex]+'.mp3');
    document.getElementById('p5_loading').innerHTML="कृपया पेज लोड होने कि प्रतीक्षा करें\nPlease wait for the page to load";

  songname.innerHTML=files[selectedindex];
}

	var backa=255;


	
function Square(){
	this.reset();
}
Square.prototype.reset=function(){
	this.ang=
	this.size=random(100);
	this.rotspeed=rms*random(4,18);
}
Square.prototype.show=function(){
	push();
	translate(width/2,height/2);
	rectMode(CENTER);
	rotate(radians(frameCount*this.rotspeed/10));
	strokeWeight(this.thickness);
	stroke(this.color);
	noFill();
	rect(0,0,this.size,this.size);
	pop();
	rectMode(CORNER);

}
Square.prototype.update=function(){
	this.speed=this.size*rms/30;
	this.size+=this.speed;
	this.thickness=parseInt(rms*3);
	this.color=yola[2];
	if(this.size>width+200)this.reset();
}

	function Spiral(){
		this.reset();
	}
	Spiral.prototype.update=function(){
		this.outward+=this.outwardspeed;
		this.sep+=this.normalspeed;
		this.aspect+=rms*this.outward/50000;
		this.color=yola[1];
		if(this.sep>width)this.reset();
		this.w=10*rms;
	
		
	}
	Spiral.prototype.reset=function(){
		this.nums=parseInt(map(rms,1,1.6,2,14));
		this.rotrate=parseInt(random(18));
		this.outwardspeed=random(5,8);
		this.w=random(1,15);
		this.outward=random(15,80);
		this.normalspeed=random(0.8,6);
		this.aspect=random(3,10);
		this.sep=random(5,40);
		this.color=yola[1];
	}
	Spiral.prototype.show=function(){
		push();
		noStroke();
		fill(this.color);
		translate(width/2,height/2);
		rotate(radians(frameCount*this.rotrate/10));
		for(var i=0;i<this.nums;i++){
			rotate(radians(360/this.nums));

			quad(-this.w,-this.sep,-this.w*this.aspect,-this.outward,this.w*this.aspect,-this.outward,this.w,-this.sep);
		}
		pop();
	}




function Spiralnil(){
		this.reset();
	}
	Spiralnil.prototype.update=function(){
		this.outward+=this.outwardspeed;
		this.sep+=this.normalspeed;
		this.aspect+=this.outward/50000;
		this.color=yola[3];
		if(this.sep>width)this.reset();
	}
	Spiralnil.prototype.reset=function(){
		this.nums=parseInt(map(rms,1,1.5,4,16));
		this.rotrate=parseInt(random(18));
		this.outwardspeed=random(6,12);
		this.w=random(1,15);
		this.outward=random(10,90);
		this.normalspeed=random(0.8,6);
		this.aspect=random(3,10);
		this.sep=random(5,50);
		this.color=yola[3];
	}
	Spiralnil.prototype.show=function(){
		push();
		stroke(this.color);
		strokeWeight(1.6);
		noFill();
		translate(width/2,height/2);
		rotate(radians(frameCount*this.rotrate/10));
		for(var i=0;i<this.nums;i++){
			rotate(radians(360/this.nums));

			quad(-this.w,-this.sep,-this.w*this.aspect,-this.outward,this.w*this.aspect,-this.outward,this.w,-this.sep);
		}
		pop();
	}





	function Arcify(){

		this.reset();


	}
	Arcify.prototype.reset=function(){
		this.radius=rms*random(5,70);
		this.color=yola[0];
	}
	Arcify.prototype.show=function(){
		push();
		translate(width/2,height/2);
		noFill();
		stroke(this.color);
		strokeWeight(this.thickness);
		ellipse(0,0,this.radius,this.radius);
		pop();
	}
	Arcify.prototype.update=function(){
		this.radius+=this.radius/30;
		this.thickness=rms*rms*this.radius/20;
		if(this.radius>100+width)this.reset();
		this.color=yola[0];
		

	}

	function setup(){
		
		var mycanvas=createCanvas(innerWidth, innerHeight); //P3D equivalent
		mycanvas.parent('content');
		
		textAlign(CENTER);
		
		foo=[];
		for(var i=0;i<4;i++){
			foo.push(new Spiral());
			foo.push(new Spiral());
			foo.push(new Spiralnil());
			foo.push(new Arcify());
			foo.push(new Spiralnil());
			foo.push(new Spiral());
			foo.push(new Square());
}
song.loop();

  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
}

function draw(){
if(frameCount%30==0){rms = map(Math.pow(analyzer.getLevel(),0.7),0,1,1,2);console.log(parseInt(1000*rms)/1000);}

	background(backa);
	if(frameCount%300<15){
		var fd=random(10,20);
	}
	else{
		var fd=random(7);
	}
	if(frameCount%500==0)xaxa();
	

	foo.forEach(function(v){
		v.update();
		v.show();
	})
if(frameCount<500){
	textSize(160);textFont("Rozha One");
 fill('rgba(42,186,217,0.8)');
 text('सयिकेडिलीया', width/2-fd, height/2+30);
 fill('rgba(206,29,39,0.8)');
 text('सयिकेडिलीया', width/2+fd, height/2+30);

  fill('rgba(0,0,0,0.8)');
 text('सयिकेडिलीया', width/2, height/2+30);
textSize(14);textFont("Roboto");
 text('Please ensure speakers are on. For best experience, use earphones.',width/2,height-100);
 textSize(12);
  text('</iआश्रिश>',width/2,height-80);
}
}

var mousecounter=0;
function xaxa(){
yola=yoo();
backa=yola[4];
}
var numcols=colarray.length;
function yoo(){
	var kkk=Math.floor(Math.random()*numcols);
	var pickcolor=colarray[kkk];
	var convertedtorgbarray=pickcolor.map(function(v){return hexToRgb(v)});
	var sortedpicked=convertedtorgbarray.sort(function (a, b) {
  return sumColor(a) > sumColor(b);
}).reverse();
	var processed=sortedpicked.map(function(v){
		return 'rgba'+v.substring(0, v.length-1)+',0.5)';
	});
return processed;
	
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    return result?'('+parseInt(result[1], 16)+','+parseInt(result[2], 16)+','+parseInt(result[3], 16)+')':'(200,187,210)';
        
}
function sumColor (str) {
  var rgb = str.replace(/[()]/g, "").split(",").map(Number);
  return 0.2126*rgb[0] + 0.7152*rgb[1] + 0.0722*rgb[2];
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

