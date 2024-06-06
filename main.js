let minimum,maximum;
let count = 0;
var prime_num = [];
function save() {
  prime_num = [];
  minimum = document.getElementById('minimum').value;
  maximum = document.getElementById('maximum').value;
  calculate();
}

function calculate() {
  let pro;
  for(let i=minimum; i<maximum; i++){
    count =0;
    pro = Math.sqrt(i);
    for (var j = 1; j < i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if(count < 2 && i != 1){
      prime_num.push(i);
    }
    console.log(prime_num);
  }
  shownum();
}

function shownum() {
  var showPrime = document.getElementById('num');
  showPrime.textContent = '';
  
  prime_num.forEach(function(item,index){
        showPrime.innerHTML += (index+1)+ ' : ' + item + '<br>';
})
}