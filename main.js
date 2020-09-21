'use strict';

{
(function() {
  var show = document.getElementById('show');
  var hide = document.getElementById('hide');
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');
  
  show.addEventListener('click', function() {
    document.body.className = 'menu-open';
  });

  hide.addEventListener('click', function() {
    document.body.className = '';
  });

  btn1.addEventListener('click', function() {
    document.body.className = '';
  });
 
  btn2.addEventListener('click', function() {
    document.body.className = '';
  });
 
  btn3.addEventListener('click', function() {
    document.body.className = '';
  });
 
  btn4.addEventListener('click', function() {
    document.body.className = '';
  });
})();
}


{
  const pics_src = ["img/slideshow/pic00.png","img/slideshow/pic01.png","img/slideshow/pic02.png"];
  let num = -1;
   
  function slideshow_timer(){
    if (num === 2){
      num = 0;
    } 
    else {
      num ++;
    }
    document.getElementById("slideshow").src = pics_src[num];
  }
   
  setInterval(slideshow_timer, 5000);
}



{
  function openContents() {
    const spinner = document.getElementById('loading');
   
    spinner.classList.add('loaded');
  }
  setTimeout(openContents,1500);
}



{
  const options = {
    threshold:0.5,
    rootMargin:'-20%'
  };

  const observer = new IntersectionObserver(callback, options);

  const targets = document.querySelectorAll('.fade_show');

  targets.forEach(target => observer.observe(target));

  function callback(entries){
    entries.forEach( entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }
}














