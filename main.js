var countJS = 0;
var testInp = [];
testInp[0] = document.querySelector('#customCheck1');
testInp[1] = document.querySelector('#customCheck2');
testInp[2] = document.querySelector('#customCheck3');
testInp[3] = document.querySelector('#customCheck4');

testInp[4] = document.querySelector('#customCheck5');
testInp[5] = document.querySelector('#customCheck6');
testInp[6] = document.querySelector('#customCheck7');
testInp[7] = document.querySelector('#customCheck8');

testInp[8] = document.querySelector('#customCheck9');
testInp[9] = document.querySelector('#customCheck10');
testInp[10] = document.querySelector('#customCheck11');
testInp[11] = document.querySelector('#customCheck12');

function jsPlus(){
  if (testInp[0].checked === true || testInp[1].checked === true || testInp[4].checked === true || testInp[5].checked === true) {
    console.log('Hello!');
    countJS += 1;
    document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((countJS * 180) / 100)) + 'deg)';
    document.querySelector('#counter').innerHTML = countJS;
  }else if (testInp[2].checked === true || testInp[3].checked === true || testInp[6].checked === true || testInp[7].checked === true || testInp[8].checked === true || testInp[9].checked === true || testInp[10].checked === true || testInp[11].checked === true) {
    countJS += 410;
    document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((countJS * 180) / 100)) + 'deg)';
    document.querySelector('#counter').innerHTML = countJS;
  }else {
    countJS = 0;
  }
}

// testInp.addEventListener("change", function (){ 2,3,6,7,8,9,10,11
//     if (testInp.checked) {
//       console.log('Hello');
//    }else {
//      console.log('blya');
//    }
//    });


// testInp.addEventListener("click", function (){
//   if (testInp.checked) {
//     console.log('Hello');
//   }else {
//     console.log('Blya');
//   }
// });
