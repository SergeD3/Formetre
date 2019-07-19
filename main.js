var countJS = 0;
function jsPlus(numb){
  countJS += numb;
  document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((countJS * 180) / 100)) + 'deg)';
  document.querySelector('#counter').innerHTML = countJS;
  
};
