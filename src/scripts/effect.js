$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#card *').hide();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});


	$('#initial').click(function(){
		$(this).fadeOut('slow').delay(50).promise().done(function(){
			$('#turn_on').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		// changeColor();
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$("#welcome_dance").remove();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('#banner').css("display", "block");
		$('.bannar').addClass('center');
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b1').animate({left:randleft,bottom:randtop},8000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b2').animate({left:randleft,bottom:randtop},8000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b3').animate({left:randleft,bottom:randtop},8000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b4').animate({left:randleft,bottom:randtop},8000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b5').animate({left:randleft,bottom:randtop},8000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b6').animate({left:randleft,bottom:randtop},8000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b7').animate({left:randleft,bottom:randtop},8000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#invite_friends').click(function(){
		 vw = $(window).width()/2;
		 mid = $(window).height()/2;

		 mid_diff = mid/12;
		 vw_diff = vw/12;
		$('#self').css({"display": "block", "bottom":'0px',"left":vw+'px'});
		$('#self').animate({top:mid-mid_diff*4,left:vw},3000);

		$('#f1').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f1').animate({top:mid-mid_diff*3,left:vw-vw_diff*3},3000);


		$('#f2').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f2').animate({top:mid-mid_diff*3,left:vw+vw_diff*3},3000);


		$('#f3').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f3').animate({top:mid-mid_diff*2,left:vw-vw_diff*4},3000);

		$('#f4').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f4').animate({top:mid-mid_diff*2,left:vw+vw_diff*4},3000);

		$('#f5').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f5').animate({top:mid-mid_diff,left:vw+vw_diff*5},3000);

		$('#f6').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f6').animate({top:mid-mid_diff,left:vw-vw_diff*5},3000);

		$('#f7').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f7').animate({top:mid,left:vw-vw_diff*6},3000);


		$('#f8').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f8').animate({top:mid,left:vw+vw_diff*6},3000);


		$('#f9').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f9').animate({top:mid+mid_diff*3,left:vw+vw_diff*2},3000);

		$('#f10').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f10').animate({top:mid+mid_diff,left:vw-vw_diff*7},3000);


		$('#f11').css({"display": "block", "top":500*Math.random()+'px',"right":'0px'});
		$('#f11').animate({top:mid+mid_diff,left:vw+vw_diff*7},3000);


		$('#f12').css({"display": "block", "top":500*Math.random()+'px',"left":'0px'});
		$('#f12').animate({top:mid+mid_diff*3,left:vw-vw_diff*4},3000);


		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('#cake_pink').css("display", "block");

		$('#cake_pink').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#dj_time').fadeIn('slow');
		});
	});

	
 
		
	$('#dj_time').click(function(){
		var audio = $('.song')[0];
        audio.pause();

        var audio1 = $('.song1')[0];
        audio1.play();
		$('body').addClass('peach-disco');
		$('#f1').addClass('dance-one')
		$('#f3').addClass('dance-two')
		$('#f2').addClass('dance-one')
		$('#f4').addClass('dance-two')
		$('#f5').addClass('dance-one')
		$('#f6').addClass('dance-one')
		$('#f7').addClass('dance-two')
		$('#f8').addClass('dance-two')
		$('#f11').addClass('dance-two')
		 $('#f12').addClass('dance-two')
		$('#self').addClass('dance-one')
		 $('#f9').addClass('dance-one')
		$('#f10').addClass('dance-one')
		
		$('#bulb_yellow').addClass('bulb-glow-yellow-disco');
		$('#bulb_red').addClass('bulb-glow-red-disco');
		$('#bulb_blue').addClass('bulb-glow-blue-disco');
		$('#bulb_green').addClass('bulb-glow-green-disco');
		$('#bulb_pink').addClass('bulb-glow-pink-disco');
		$('#bulb_orange').addClass('bulb-glow-orange-disco');
		 vw = $(window).width()/2;
		 count=7

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')	
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: 0},500);
		$('#b22').animate({top:240, left: vw-vw*2/3},500);
		$('#b33').animate({top:240, left: vw-vw/3},500);
		$('#b44').animate({top:240, left: vw},500);
		$('#b55').animate({top:240, left: vw+vw/3},500);
		$('#b66').animate({top:240, left: vw+vw*2/3},500);
		$('#b77').animate({top:240, left: 2*vw},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		// var audio1 = $('.song1')[0];
  //       audio1.pause();

  //       var audio2 = $('.song')[0];
  //       audio2.play();
		$(this).fadeOut('slow');
		$('#card').css("display", "block");
		$('#card').show();
		$('#card').css('position', 'absolute');
		$('#card').css('z-index', 9999);
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		$('#card').fadeIn('slow');

		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#picture_time').fadeIn('slow');
		});
	
		
	});

	$('#picture_time').click(function(){
		window.location.replace("src/html/surprise.html")
		
	});
});
// window.addEventListener("resize", resizeCanvas, false);
//         window.addEventListener("DOMContentLoaded", onLoad, false);
        
//         window.requestAnimationFrame = 
//             window.requestAnimationFrame       || 
//             window.webkitRequestAnimationFrame || 
//             window.mozRequestAnimationFrame    || 
//             window.oRequestAnimationFrame      || 
//             window.msRequestAnimationFrame     || 
//             function (callback) {
//                 window.setTimeout(callback, 1000/60);
//             };
        
//         var canvas, ctx, w, h, particles = [], probability = 0.04,
//             xPoint, yPoint;
        
        
        
        
        
//         function onLoad() {
//             canvas = document.getElementsById("canvas");
//             ctx = canvas.getContext("2d");
//             resizeCanvas();
            
//             window.requestAnimationFrame(updateWorld);
//         } 
        
//         function resizeCanvas() {
//             if (!!canvas) {
//                 w = canvas.width = window.innerWidth;
//                 h = canvas.height = window.innerHeight;
//             }
//         } 
        
//         function updateWorld() {
//             update();
//             paint();
//             window.requestAnimationFrame(updateWorld);
//         } 
        
//         function update() {
//             if (particles.length < 500 && Math.random() < probability) {
//                 createFirework();
//             }
//             var alive = [];
//             for (var i=0; i<particles.length; i++) {
//                 if (particles[i].move()) {
//                     alive.push(particles[i]);
//                 }
//             }
//             particles = alive;
//         } 
        
//         function paint() {
//             ctx.globalCompositeOperation = 'source-over';
//             ctx.fillStyle = "rgba(0,0,0,0.2)";
//             ctx.fillRect(0, 0, w, h);
//             ctx.globalCompositeOperation = 'lighter';
//             for (var i=0; i<particles.length; i++) {
//                 particles[i].draw(ctx);
//             }
//         } 
        
//         function createFirework() {
//             xPoint = Math.random()*(w-200)+100;
//             yPoint = Math.random()*(h-200)+100;
//             var nFire = Math.random()*50+100;
//             var c = "rgb("+(~~(Math.random()*200+55))+","
//                  +(~~(Math.random()*200+55))+","+(~~(Math.random()*200+55))+")";
//             for (var i=0; i<nFire; i++) {
//                 var particle = new Particle();
//                 particle.color = c;
//                 var vy = Math.sqrt(25-particle.vx*particle.vx);
//                 if (Math.abs(particle.vy) > vy) {
//                     particle.vy = particle.vy>0 ? vy: -vy;
//                 }
//                 particles.push(particle);
//             }
//         } 
        
//         function Particle() {
//             this.w = this.h = Math.random()*4+1;
            
//             this.x = xPoint-this.w/2;
//             this.y = yPoint-this.h/2;
            
//             this.vx = (Math.random()-0.5)*10;
//             this.vy = (Math.random()-0.5)*10;
            
//             this.alpha = Math.random()*.5+.5;
            
//             this.color;
//         } 
        
//         Particle.prototype = {
//             gravity: 0.05,
//             move: function () {
//                 this.x += this.vx;
//                 this.vy += this.gravity;
//                 this.y += this.vy;
//                 this.alpha -= 0.01;
//                 if (this.x <= -this.w || this.x >= screen.width ||
//                     this.y >= screen.height ||
//                     this.alpha <= 0) {
//                         return false;
//                 }
//                 return true;
//             },
//             draw: function (c) {
//                 c.save();
//                 c.beginPath();
                
//                 c.translate(this.x+this.w/2, this.y+this.h/2);
//                 c.arc(0, 0, this.w, 0, Math.PI*2);
//                 c.fillStyle = this.color;
//                 c.globalAlpha = this.alpha;
                
//                 c.closePath();
//                 c.fill();
//                 c.restore();
//             }
//         } 




  
   
 


//alert('hello');