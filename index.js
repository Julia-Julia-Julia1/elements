'user strict';



  let element=document.getElementById('btn');

//  var element= document.getElementByTagName('button');

 element.style.borderColor = 'red';
 element.style.borderWidth = '100px';

element.addEventListener('click',sayHi,false);
        
function sayHi() {
  alert('sayHi');
}
  

let el = document.getElementById('btnn');
el.addEventListener('click', addAppend, false);
function addAppend() { 

document.write('<p>Абзац</p>');
document.write('<p>Абзац1</p>');
document.write('<p>Абзац2</p>');
document.write('<p>Абзац3</p>');
}


(function ($) {
  $(document).ready(function () {
           $('#btn1').click(function () {
             $('.items').append('<p>Абзац</p>');
           });

           $('#btn2').click(function () {
             for (var i = 1; i <= 10; i++) {
               $('.items').append('<p>Абзац</p>');
             }
           });

           $('#btn3').click(function () {
             $('.items').toggle();
           });
       
           $('#btn5').click(function () {
             $('.items p').each(function () {
               $(this).text($(this).index() + 1 + '. ' + $(this).text());
             });
           });

           $('#btn6').click(function () {
             $('.items p:first-child').css('color', 'green');
           });

           $('#btn7').click(function () {
             $('.info').html('<span class="red">На странице ' + $('.items p').length + ' абзацев</span>');
           });

           $('#btn8').click(function () {
             $('.info').text('Размер блока .items равен ' + $('.items').width() + 'x' + $('.items').height() + 'px');
           });

           $('#btn9').click(function () {
             $('.items p').each(function () {
               $(this).attr('data-order', $(this).index());
             });
           });

           $('#btn10').click(function () {
           $('.items p').eq(+$('#inp1').val() - 1).remove();
           });

           });

})(jQuery);

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var ball = {
  x: 100,
  y: 100,
  radius: 25,
  color: 'green',
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

ball.draw();
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var raf;

var ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: 'blue',
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener('mouseover', function (e) {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener('mouseout', function (e) {
  window.cancelAnimationFrame(raf);
});

ball.draw();
if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
  ball.vy = -ball.vy;
}
if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
  ball.vx = -ball.vx;
}
ball.vy *= .99;
ball.vy += .25;





  