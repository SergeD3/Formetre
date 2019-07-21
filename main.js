// var countJS = 0;
// function jsPlus(){
//   var testInp = [];
//   testInp[0] = document.querySelector('#customCheck1').checked;
//   testInp[1] = document.querySelector('#customCheck2').checked;
//   testInp[2] = document.querySelector('#customCheck3').checked;
//   testInp[3] = document.querySelector('#customCheck4').checked;
//
//   testInp[4] = document.querySelector('#customCheck5').checked;
//   testInp[5] = document.querySelector('#customCheck6').checked;
//   testInp[6] = document.querySelector('#customCheck7').checked;
//   testInp[7] = document.querySelector('#customCheck8').checked;
//
//   testInp[8] = document.querySelector('#customCheck9').checked;
//   testInp[9] = document.querySelector('#customCheck10').checked;
//   testInp[10] = document.querySelector('#customCheck11').checked;
//   testInp[11] = document.querySelector('#customCheck12').checked;
//
// for (var i = 0; i < testInp.length; i++ ) {
//   switch (testInp[i]) {
//     case true: {
//     countJS += 1;
//     document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((countJS * 180) / 100)) + 'deg)';
//     document.querySelector('#counter').innerHTML = countJS;
//   };   break;
//     case false: {
//     countJS -= 1;
//     document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((countJS * 180) / 100)) + 'deg)';
//     document.querySelector('#counter').innerHTML = countJS;
//   }; break;
// }
// }
// };



const COUNTER_STEP = 10;

class Checkbox {
  constructor(node) {
    this.node = node;

    if (!this.node) return;

    this.counter = 0;

    this.onClick = this.onClick.bind(this);

    this.node.addEventListener('click', this.onClick, false);
  }

  onClick(e) {
    const checkbox = e.target.closest('input[type="checkbox"]');

    if (!checkbox) return;

    this.isChecked(checkbox) ? this.decrease() : this.increase();
  }

  isChecked(checkbox) {
    return !checkbox.checked;
  }

  increase() {
    this.counter += COUNTER_STEP;
    document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((this.counter * 180) / 100)) + 'deg)';
    document.querySelector('#counter').innerHTML = this.counter;
  }

  decrease() {
    this.counter -= COUNTER_STEP;
    document.querySelector('#arrow').style.transform = 'rotate(' + (-50 + ((this.counter * 180) / 100)) + 'deg)';
    document.querySelector('#counter').innerHTML = this.counter;
  }
}

new Checkbox(document.querySelector('.mainCont'));
